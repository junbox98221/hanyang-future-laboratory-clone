import React from "react";
import styled from "styled-components";
import img from "img/photoPage/photoPagePoster.jpg";

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
  height: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  color: black;
`;

const Title = styled.h3`
  font-size: 50px;
`;

const SubTitle = styled.h5`
  font-size: 25px;
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
          <Title>사진 게시판</Title>
          <SubTitle>아이들의 생생한 수업 모습을 담았습니다</SubTitle>
        </StringBox>
      </MainImg>
      <Arrow />
    </BackImg>
  );
};

export default Poster;
