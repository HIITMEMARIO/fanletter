import React from 'react';
import memo from 'asset/memo.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import usericon from 'asset/usericon.png';

const StmemberCards = styled.div`
  position: relative;
  width: 600px;
  height: 265px;
  background-image: url(${memo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Stnickname = styled.div`
  position: absolute;
  display: flex;
  /* background-color: rebeccapurple; */
  width: 300px;
  height: 100px;
  padding: 10px;
  top: 25px;
`;

const Stcontents = styled.div`
  position: absolute;
  display: flex;
  /* background-color: green; */
  width: 500px;
  height: 80px;
  padding: 10px;
  top: 180px;
`;

const StPtag = styled.p`
  font-size: ${(props) => props.$fontSize};
  overflow: ${(props) => props.$overflow};
  text-overflow: ${(props) => props.$textOverflow};
  white-space: ${(props) => props.$whiteSpace};
`;

const StTime = styled.div`
  position: absolute;
  display: flex;
  width: 500px;
  top: 140px;
  left: 10px;
`;

const STUserImg = styled.img`
  position: absolute;
  width: 100px;
  background-color: red;
  border-radius: 50%;
  right: 40px;
  top: 50px;
  outline: 3px double #818181;
`;

function Comment({ id, nickname, content }) {
  const time = new Date().toLocaleString('ko', {});

  return (
    <>
      <Link to={`/detail/${id}`}>
        <StmemberCards key={id}>
          <Stnickname>
            <StPtag $fontSize="30px">{nickname}</StPtag>
          </Stnickname>
          <Stcontents>
            <StPtag
              $fontSize="20px"
              $overflow="hidden"
              $textOverflow="ellipsis"
              $whiteSpace="nowrap"
            >
              {content}
            </StPtag>
          </Stcontents>
          <StTime>
            <StPtag $fontSize="20px">작성시간 : {time}</StPtag>
          </StTime>
          <STUserImg src={usericon} />
        </StmemberCards>
      </Link>
    </>
  );
}

export default Comment;
