import React from "react";
import styled from "styled-components";
import Poster from "Components/photoPageComponent/Poster";

const Container = styled.div`
  margin: 0 0 100px 0;
`;

const Title = styled.div`
  width: 80vw;
  margin: 5vw auto;
  padding: 20px 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  font-size: 25px;
`;

const GridSection = styled.div`
  display: grid;
  width: 80vw;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;
const PhotoOver = styled.div`
  width: 25vw;
  height: 35vh;
  overflow: hidden;
`;
const PhotoContainer = styled.div`
  height: 48vh;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
`;

const StringSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 13vh;
  padding: 6% 8%;
`;
const PhotoTitle = styled.h3`
  opacity: 0.7;
`;
const Info = styled.div`
  opacity: 0.4;
`;

const PhotoPresenter = () => {
  const data = [
    {
      src: "img/photoPage/1.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/2.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/3.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/4.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/5.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/6.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/7.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/8.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/9.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/10.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/11.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/12.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
    {
      src: "img/photoPage/13.jpg",
      title: "[김⚪형님] 활동사진",
      info: "2021-08-23",
    },
  ];
  return (
    <Container>
      <Poster />
      <Title>사진게시판</Title>
      <GridSection>
        {data.map((item) => (
          <PhotoContainer>
            <PhotoOver>
              <Photo src={require(`../../${item.src}`).default} />
            </PhotoOver>
            <StringSection>
              <PhotoTitle>{item.title}</PhotoTitle>
              <Info>{item.info}</Info>
            </StringSection>
          </PhotoContainer>
        ))}
      </GridSection>
    </Container>
  );
};
export default PhotoPresenter;
