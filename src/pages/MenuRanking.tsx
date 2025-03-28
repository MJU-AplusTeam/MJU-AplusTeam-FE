import React from 'react';
import styled from 'styled-components';

const MenuRanking = () => {
  return (
    <MenuRankingContainer>
      <h1>메뉴 랭킹</h1>
    </MenuRankingContainer>
  );
};

const MenuRankingContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

export default MenuRanking;
