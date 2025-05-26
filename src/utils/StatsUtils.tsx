import type { PlayerStats } from "../types/player";

export function extractStatsFromRaw(raw: any): {
  statsPerGame: PlayerStats;
  statsSeasonTotal: PlayerStats;
} {
  const gp = raw.GP ?? 1;

  const statsPerGame: PlayerStats = {
    points: raw.PTS,
    assists: raw.AST,
    rebounds: raw.TRB,
    steals: raw.STL,
    blocks: raw.BLK,
    gamesPlayed: gp,
  };

  const statsSeasonTotal = {
    points: Math.round(statsPerGame.points * gp),
    assists: Math.round(statsPerGame.assists * gp),
    rebounds: Math.round(statsPerGame.rebounds * gp),
    steals: Math.round(statsPerGame.steals * gp),
    blocks: Math.round(statsPerGame.blocks * gp),
    gamesPlayed: gp,
  };

  return { statsPerGame, statsSeasonTotal };
}
