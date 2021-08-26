import styled from "styled-components";
import BarComponent from "Components/Bar";
import img from "img/eco.png";

const SubTopVariety = styled.div`
  background-image: url(${img});
  background-position: center center;
  background-size: 50vw 100vh;
  height: 55vh;
  padding: 60px 15vw 180px 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  background: white;
  opacity: 1;
`;

const Concept = styled.div`
  margin-top: 10px;
`;

const SubTopComponent = ({ subTopData }) => (
  <SubTopVariety>
    <SmallTitle>{subTopData.subTitle}</SmallTitle>
    <Title>
      {subTopData.mainTitle}
      <Concept>{subTopData.eduConcept}</Concept>
    </Title>
    <Bar />
  </SubTopVariety>
);

export default SubTopComponent;
