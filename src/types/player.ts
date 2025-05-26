export interface PlayerBio {
  name: string;
  playerId: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  height: number;
  weight: number;
  currentTeam: string;
  league: string;
  leagueType: string;
  photoUrl?: string | null;
}

export interface ScoutRanking {
  playerId: number;
  [scout: string]: number | null;
}

export interface Measurement {
  playerId: number;
  heightNoShoes?: number | null;
  heightShoes?: number | null;
  wingspan?: number | null;
  reach?: number | null;
  maxVertical?: number | null;
  noStepVertical?: number | null;
  weight?: number | null;
  bodyFat?: number | null;
  handLength?: number | null;
  handWidth?: number | null;
  agility?: number | null;
  sprint?: number | null;
  shuttleLeft?: number | null;
  shuttleRight?: number | null;
  shuttleBest?: number | null;
}



export interface ScoutingReport {
  comment: string;
  date: string;
}

export interface DraftData {
  bio: PlayerBio[];
  scoutRankings: ScoutRanking[];
  measurements: Measurement[];
}

export interface PlayerStats {
  points: number;
  assists: number;
  rebounds: number;
  steals: number;
  blocks: number;
  gamesPlayed?: number;
}



export interface PlayerFull {
  bio: PlayerBio;
  scoutRankings?: ScoutRanking;
  measurements?: Measurement;
  statsPerGame?: PlayerStats;
  statsSeasonTotal?: PlayerStats;
}
