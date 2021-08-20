import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainSubTop from "Components/MainSubTop";

const Container = styled.section`
  background-color: white;
  height: 300px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;

const Poster = styled(Link)`
  display: table;
  float: left;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  transition: border 0.4s linear;
  transition: box-shadow 0.4s linear;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 2px solid #3b8188;
  }
  width: 200px;
`;

const PosterImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 70px;
  display: table-cell;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: 550;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  left: 90vw;
  font-size: 50px;
  opacity: 0.4;
  color: #004c86;
  transition: opacity 0.2s linear;
  transition: font-size 0.2s linear;
  &:hover {
    opacity: 0.9;
    font-size: 60px;
  }
`;

const SlideContainer = styled.div`
  width: 1600px;
  overflow: hidden;
`;

const EduList = ({ data }) => {
  const subTopData = {
    mainTitle1: "한양에듀",
    mainTitle2: "교육 프로그램",
    subTitle: "The technology in education",
  };

  const sliding = () => {
    return 1;
  };

  return (
    <Container>
      <MainSubTop subTopData={subTopData} />
      <SlideContainer>
        {data.map((item) => (
          <Poster>
            <PosterImg
              src={require(`../../${item.imgUrl}`).default}
              alt="lecture"
            />
            <Title>{item.title}</Title>
          </Poster>
        ))}
      </SlideContainer>
      <Arrow onClick={sliding}>
        <i className="fas fa-chevron-right"></i>
      </Arrow>
    </Container>
  );
};

export default EduList;
