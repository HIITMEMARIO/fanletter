import React from 'react';
import memo from 'asset/memo.jpg';
import styled from 'styled-components';

const StmemberCards = styled.div`
  position: relative;
  width: 600px;
  height: 265px;
  background-image: url(${memo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StPtag = styled.p`
  color: pink;
  font-size: 20px;
  padding: 10px;
`;

function NoCard() {
  return (
    <>
      <StmemberCards>
        <StPtag>
          등록된 팬레터가 없습니다! 첫 번째 팬레터의 주인공이 되세요!
        </StPtag>
      </StmemberCards>
    </>
  );
}
export default NoCard;
