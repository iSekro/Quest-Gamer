export type RankTier =
  | "RECRUIT"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER"
  | "LEGEND";

export type Division = "IV" | "III" | "II" | "I" | "NONE";

export interface RankedProfile {
  userId: string;
  seasonId: string;
  rankTier: RankTier;
  division: Division;
  lp: number;
  mmr: number;
  gamesPlayed: number;
  integrityScore: number;
}

export interface MatchResultInput {
  accuracy: number;
  averageResponseTimeMs: number;
  maxStreak: number;
  difficultyScore: number;
  suspiciousScore: number;
}
