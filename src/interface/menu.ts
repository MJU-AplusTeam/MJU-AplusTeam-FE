export interface MenuRankingItem {
  id: number;
  name: string;
  score: number;
  rankChange: number; // 순위 변동
}

export type RankingPeriod = 'weekly' | 'monthly';

export type RankingType = 'top' | 'bottom';

export interface MenuRankingResponse {
  topRankings: MenuRankingItem[];
  bottomRankings: MenuRankingItem[];
  period: RankingPeriod;
}
