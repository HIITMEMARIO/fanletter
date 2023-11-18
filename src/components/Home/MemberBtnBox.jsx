import React from 'react';
import styled from 'styled-components';
import memberbtn from 'asset/memberbtn.jpg';

function MemberBtnBox({ memberData, setMemberName }) {
  return (
    <StMemberBtnBox>
      {memberData.map((item) => {
        return (
          <StBtn
            key={item.id}
            // memberbtn={memberbtn}
            onClick={() => {
              setMemberName(item.name);
            }}
          >
            {item.name}
          </StBtn>
        );
      })}
    </StMemberBtnBox>
  );
}

const StMemberBtnBox = styled.div`
  width: 1300px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  & :hover {
    outline: 8px double #c3c3c3;
    box-shadow: 0px 0px 100px pink;
  }
`;

const StBtn = styled.button`
  font-size: 30px;
  cursor: pointer;
  display: flex;
  background-image: url(${memberbtn});
  background-size: cover;
  background-repeat: no-repeat;
  width: 195px;
  height: 130px;
  align-items: center;
  justify-content: center;
  outline: 3px double #c3c3c3;
`;

export default MemberBtnBox;
