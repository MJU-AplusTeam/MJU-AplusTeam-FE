import { instance } from './axios';
import { MenuRankingResponse, RankingPeriod } from '../interface/menu';

// 데모 데이터
const MOCK_DATA: Record<RankingPeriod, MenuRankingResponse> = {
  weekly: {
    topRankings: [
      { id: 1, name: '김치찌개', score: 4.8, rankChange: 2 },
      { id: 2, name: '비빔밥', score: 4.7, rankChange: -1 },
      { id: 3, name: '돈까스', score: 4.6, rankChange: 1 },
      { id: 4, name: '된장찌개', score: 4.5, rankChange: 0 },
      { id: 5, name: '불고기', score: 4.4, rankChange: -2 },
    ],
    bottomRankings: [
      { id: 6, name: '공나물국', score: 2.1, rankChange: -3 },
      { id: 7, name: '오징어볶음', score: 2.3, rankChange: 1 },
      { id: 8, name: '김치볶음밥', score: 2.5, rankChange: 0 },
      { id: 9, name: '우동', score: 2.7, rankChange: 2 },
      { id: 10, name: '아채죽', score: 2.8, rankChange: -1 },
    ],
    period: 'weekly',
  },
  monthly: {
    topRankings: [
      { id: 1, name: '삼겹살', score: 4.9, rankChange: 3 },
      { id: 2, name: '치킨', score: 4.8, rankChange: -1 },
      { id: 3, name: '피자', score: 4.7, rankChange: 2 },
      { id: 4, name: '라면', score: 4.6, rankChange: -2 },
      { id: 5, name: '떡볶이', score: 4.5, rankChange: 1 },
    ],
    bottomRankings: [
      { id: 6, name: '청국장', score: 2.0, rankChange: -2 },
      { id: 7, name: '순대국', score: 2.2, rankChange: 1 },
      { id: 8, name: '콩나물국밥', score: 2.4, rankChange: 0 },
      { id: 9, name: '미역국', score: 2.6, rankChange: -1 },
      { id: 10, name: '북엇국', score: 2.8, rankChange: 2 },
    ],
    period: 'monthly',
  },
};

export const getMenuRankings = async (period: RankingPeriod): Promise<MenuRankingResponse> => {
  // const response = await api.get('/api/menuRanking', {
  //   params: { period },
  // });
  // return response.data;

  // 데모 데이터
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA[period]);
    }, 500);
  });
};
