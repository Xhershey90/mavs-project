import type {
  PlayerBio,
  ScoutRanking,
  Measurement,
  PlayerFull,
  PlayerStats,
} from "../types/player";

/**
 * Extracts per-game and season-total stats from a raw season log entry.
 * Rounds season totals to whole numbers.
 */
export function extractStatsFromRaw(raw: any): {
  statsPerGame: PlayerStats;
  statsSeasonTotal: PlayerStats;
} {
  const gp = raw.GP ?? 1;

  const statsPerGame: PlayerStats = {
    points: raw.PTS ?? 0,
    assists: raw.AST ?? 0,
    rebounds: raw.TRB ?? 0,
    steals: raw.STL ?? 0,
    blocks: raw.BLK ?? 0,
    gamesPlayed: gp,
  };

  const statsSeasonTotal: PlayerStats = {
    points: Math.round(statsPerGame.points * gp),
    assists: Math.round(statsPerGame.assists * gp),
    rebounds: Math.round(statsPerGame.rebounds * gp),
    steals: Math.round(statsPerGame.steals * gp),
    blocks: Math.round(statsPerGame.blocks * gp),
    gamesPlayed: gp,
  };

  return { statsPerGame, statsSeasonTotal };
}

/**
 * Merges bios, scout rankings, measurements, and stats into a unified PlayerFull[] structure.
 */
export function mergePlayerData(
  bios: PlayerBio[],
  rankings: ScoutRanking[],
  measurements: Measurement[],
  seasonLogs: any[]
): PlayerFull[] {
  return bios.map((bio) => {
    const scoutRankings = rankings.find((r) => r.playerId === bio.playerId);
    const measurement = measurements.find((m) => m.playerId === bio.playerId);
    const statEntry = seasonLogs.find((s) => s.playerId === bio.playerId);

    const { statsPerGame, statsSeasonTotal } = statEntry
      ? extractStatsFromRaw(statEntry)
      : { statsPerGame: undefined, statsSeasonTotal: undefined };

    return {
      bio,
      scoutRankings,
      measurements: measurement,
      statsPerGame,
      statsSeasonTotal,
    };
  });
}
