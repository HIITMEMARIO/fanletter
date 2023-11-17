import styled from 'styled-components';
import usericon from 'asset/usericon.png';
import logo from 'asset/logo.png';
import GlobalStyle from 'GlobalStyle';
import { memberData } from 'memberData';
import { useContext, useState } from 'react';
import uuid from 'react-uuid';
import MemberBtnBox from 'components/Home/MemberBtnBox';
import InputBox from '../components/Home/InputBox';
import CardContainer from 'components/Home/CardContainer';
import { Context } from 'context/Context';

function Home() {
  const data = useContext(Context);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [memberSelect, setMemberSelect] = useState('민지');
  const [memberName, setMemberName] = useState('민지');

  const addCard = () => {
    const newList = {
      createdAt: new Date().toLocaleString('ko', {}),
      id: uuid(),
      nickname: nickname,
      content: content,
      writedTo: memberSelect,
      avatar: usericon,
    };

    if (content === '' && nickname === '') {
      return alert('닉네임과 내용중 둘 중 하나는 써주세요!');
    } else {
      data.setList([...data.list, newList]);
      setNickname('');
      setContent('');
    }
  };

  return (
    <>
      <GlobalStyle />

      <Stcontainer>
        <StHeader>
          <StLogo src={logo} />
        </StHeader>
        <MemberBtnBox memberData={memberData} setMemberName={setMemberName} />
        <InputBox
          nickname={nickname}
          setNickname={setNickname}
          content={content}
          setContent={setContent}
          setMemberSelect={setMemberSelect}
          memberData={memberData}
          addCard={addCard}
        />
        <CardContainer memberName={memberName} list={data.list} />
      </Stcontainer>
    </>
  );
}

const Stcontainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StHeader = styled.header`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StLogo = styled.img`
  width: 500px;
`;

export default Home;
