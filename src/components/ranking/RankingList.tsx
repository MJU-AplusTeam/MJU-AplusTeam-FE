import React from 'react';
import styled from 'styled-components';
import { MenuRankingItem, RankingType } from '../interface/menu';

interface RankingListProps {
  title: string;
  items: MenuRankingItem[];
  type: RankingType;
}

const RankingList = ({ title, items, type }: RankingListProps) => {
  return (
    <RankingSection>
      <RankingTitle>{title}</RankingTitle>
      <RankingListContainer>
        {items.map((item, index) => (
          <RankingItem key={item.id}>
            <Rank>{index + 1}</Rank>
            <MenuName>{item.name}</MenuName>
            <Score>{item.score.toFixed(1)}점</Score>
            <RankChange change={item.rankChange}>
              {item.rankChange > 0
                ? `▲${item.rankChange}`
                : item.rankChange < 0
                  ? `▼${Math.abs(item.rankChange)}`
                  : '-'}
            </RankChange>
          </RankingItem>
        ))}
      </RankingListContainer>
    </RankingSection>
  );
};

const RankingSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const RankingTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

const RankingListContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const RankingItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const Rank = styled.span`
  font-weight: bold;
  width: 40px;
`;

const MenuName = styled.span`
  flex: 1;
`;

const Score = styled.span`
  margin: 0 1rem;
  color: #666;
`;

const RankChange = styled.span<{ change: number }>`
  color: ${(props) => (props.change > 0 ? '#f00' : props.change < 0 ? '#00f' : '#666')};
  width: 50px;
  text-align: right;
`;

export default RankingList;
