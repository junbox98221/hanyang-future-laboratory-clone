import styled from "styled-components";
import BarComponent from "Components/Bar";
import img from "img/board.png";

const SubTop = styled.div`
  position: relative;
  background-image: url(${img});
  background-position: center top;
  background-size: 50vw 450px;
  height: 45vh;
  padding: 40px 0 150px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  *:not(Box) {
    z-index: 2;
  }
`;

const SmallTitle = styled.span`
  font-size: 15px;
  font-weight: 900;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
`;

const Bar = styled(BarComponent)`
  width: 35px;
  height: 3px;
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  gap: 5px;
`;

const SubTopComponent = ({ subTopData }) => {
  const { title, smallTitle, subTitle1, subTitle2 } = subTopData;
  return (
    <SubTop>
      <SmallTitle>{smallTitle}</SmallTitle>
      <Title>{title}</Title>
      <Bar></Bar>
      <Paragraph>
        <div>{subTitle1}</div>
        <div>{subTitle2}</div>
      </Paragraph>{" "}
    </SubTop>
  );
};

export default SubTopComponent;
