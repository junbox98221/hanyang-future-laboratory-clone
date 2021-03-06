import styled from "styled-components";
import BarComponent from "Components/Bar";
import img from "img/form.jpg";

const SubTop = styled.div`
  background-image: url(${img});
  background-position: center center;
  background-size: 50vw 450px;
  height: 45vh;
  padding: 50px 0 130px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin: 14px 0;
  }
`;

const SmallTitle = styled.span`
  opacity: 0.4;
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

const SubTopComponent = () => (
  <SubTop>
    <SmallTitle>Education Application</SmallTitle>
    <Title>교육신청</Title>
    <Bar></Bar>
  </SubTop>
);

export default SubTopComponent;
