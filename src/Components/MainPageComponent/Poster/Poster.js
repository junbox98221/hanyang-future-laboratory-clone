import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "img/review.jpg";

const BackImg = styled.section`
  height: 450px;
  background-image: url(${img});
  background-position: center center;
  background-size: 100vw 450px;
  display: flex;
  align-items: center;
`;

const MainImg = styled.div`
  width: 76%;
  height: 100%;
  background-image: url(${img});
  background-position: center center;
  background-size: 100% 45vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StringBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  color: white;
  font-weight: 400;
  gap: 25px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
`;

const Title = styled.h3`
  font-size: 40px;
`;

const SubTitle = styled.h5`
  font-size: 18px;
`;

const Anchor = styled(Link)`
  background: linear-gradient(to right, var(--sub-color), var(--main-color));
  padding: 20px 30px;
  border-radius: 50px;
  border: 2px solid white;
  &:hover {
    background: none;
    border: 2px solid white;
  }
`;

const Arrow = styled.div`
  width: 12%;
  height: 100%;
  text-align: center;
  background-color: white;
  opacity: 0.15;
  filter: blur(5px);
`;

const Poster = () => {
  return (
    <BackImg>
      <Arrow />
      <MainImg>
        <StringBox>
          <Title>에리카에듀는</Title>
          <Title>아이들의 미래를 지원합니다</Title>
          <SubTitle>
            새로운 기술과 이론을 스스로 학습해 나갈 수 있는 동기를 만들어줍니다
          </SubTitle>
          <Anchor to="/online">교육 소개 바로가기</Anchor>
        </StringBox>
      </MainImg>
      <Arrow />
    </BackImg>
  );
};

export default Poster;
