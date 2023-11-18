import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import NoCard from './NoCard';

function CardContainer({ list, memberName }) {
  const filteredList = list.filter((item) => {
    return memberName === item.writedTo;
  });

  return (
    <StCardContainer>
      {filteredList.length === 0 ? (
        <NoCard />
      ) : (
        filteredList.map((item) => {
          return (
            <Comment
              key={item.id}
              id={item.id}
              nickname={item.nickname}
              content={item.content}
              list={list}
            />
          );
        })
      )}
    </StCardContainer>
  );
}

const StCardContainer = styled.div`
  width: 1000px;
  display: flex;
  background-color: #818181;
  flex-direction: column-reverse;
  align-items: center;
  outline: thick double #c3c3c3;
`;

export default CardContainer;
