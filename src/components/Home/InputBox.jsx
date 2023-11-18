import React from 'react';
import styled from 'styled-components';
import input from 'asset/input.png';
import mailicon from 'asset/mailicon.png';
import sendmail from 'asset/sendmail.png';

function InputBox({
  nickname,
  setNickname,
  content,
  setContent,
  setMemberSelect,
  memberData,
  addCard,
}) {
  return (
    <StInputBox>
      <StNickname>
        <StPtag>닉네임 :</StPtag>
        <StInput
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          $height="30px"
          maxLength={20}
          placeholder="최대 20글자까지 작성할 수 있습니다."
        ></StInput>
      </StNickname>

      <StContent>
        <StPtag>내용 :</StPtag>
        <StInput
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          $height="100px"
          maxLength={100}
          placeholder="최대 100자까지만 작성할 수 있습니다."
        ></StInput>
      </StContent>

      <StSendTo>
        <StMailIcon src={mailicon}></StMailIcon>
        <StPtag>to Who?</StPtag>
        <Stselect
          onChange={(e) => {
            return setMemberSelect(e.target.value);
          }}
        >
          {memberData.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </Stselect>
      </StSendTo>

      <StSend>
        <StSendMailImg src={sendmail}></StSendMailImg>
        <StSendBtn onClick={addCard}>Send!!</StSendBtn>
      </StSend>
    </StInputBox>
  );
}

const StInputBox = styled.div`
  margin: 100px;
  background-image: url(${input});
  background-repeat: no-repeat;
  background-size: contain;
  top: 300px;
  width: 1080px;
  height: 693px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;
const StPtag = styled.p`
  font-size: 30px;
  display: flex;
`;
const StInput = styled.textarea`
  width: 600px;
  height: ${(props) => props.$height};
  margin-left: 10px;
  resize: none;
  outline: 3px double #c3c3c3;
`;

const StNickname = styled.div`
  display: inline-flex;
  justify-content: center;
  margin: 10px;
  margin-left: -20px;
`;

const StContent = styled.div`
  margin: 10px;
  display: inline-flex;
  justify-content: center;
`;

const StSendTo = styled.div`
  width: 1000px;
  display: inline-flex;
  justify-content: center;
  margin: 10px;
  align-items: center;
`;

const Stselect = styled.select`
  width: 80px;
  height: 30px;
  margin-left: 10px;
  outline: 3px double #c3c3c3;
`;

const StMailIcon = styled.img`
  width: 100px;
`;

const StSend = styled.div`
  width: 1000px;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  & :hover:not(:first-child) {
    outline: 8px double #c3c3c3;
    color: #fff;
  }
`;

const StSendBtn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  outline: 3px double #c3c3c3;
  background-color: #818181;
  font-size: 30px;
`;

const StSendMailImg = styled.img`
  width: 100px;
`;

export default InputBox;
