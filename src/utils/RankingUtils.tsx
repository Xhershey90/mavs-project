import type { ScoutRanking } from "../types/player";

export function getAverageRank(ranking?: ScoutRanking): number {
  if (!ranking) return Infinity;

  const values = Object.entries(ranking)
    .filter(([key, value]) => key !== "playerId" && typeof value === "number")
    .map(([_, value]) => value as number);

  return values.length
    ? values.reduce((a, b) => a + b) / values.length
    : Infinity;
}

export function getScoutRankOutliers(ranking?: ScoutRanking): {
  [scout: string]: { rank: number; status: "high" | "low" | "normal" };
} {
  const outliers: {
    [scout: string]: { rank: number; status: "high" | "low" | "normal" };
  } = {};
  if (!ranking) return outliers;

  const avg = getAverageRank(ranking);

  for (const [scout, rank] of Object.entries(ranking)) {
    if (scout === "playerId" || rank === null || typeof rank !== "number")
      continue;

    const diff = rank - avg;
    let status: "high" | "low" | "normal" = "normal";
    if (diff <= -5) status = "high";
    else if (diff >= 5) status = "low";

    outliers[scout] = { rank, status };
  }

  return outliers;
}
