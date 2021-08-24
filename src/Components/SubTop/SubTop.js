import styled from "styled-components";
import BarComponent from "Components/Bar";

const SubTop = styled.div`
  position: relative;
  background-color: #ecfec9;
  height: 45vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin: 14px 0;
  }
  *:not(Box) {
    z-index: 2;
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

const Paragraph = styled.div`
  span {
    padding: 3px 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  gap: 5px;
`;

const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(#e8a, 1),
      rgba(#def, 0) 80%,
      rgba(white, 0.5)
    );
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }

  @keyframes drift {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;

const WaveOne = styled.div`
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 50%;
  background: #0af;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 3000ms infinite linear;
`;
const WaveTwo = styled.div`
  animation: drift 5000ms infinite linear;
`;
const WaveThree = styled.div`
  animation: drift 7000ms infinite linear;
  opacity: 0.1;
  background: yellow;
`;

const SubTopComponent = () => (
  <SubTop>
    <Box>
      <WaveOne />
      <WaveTwo />
      <WaveThree />
    </Box>
    <SmallTitle>Education Introduction</SmallTitle>
    <Title>교육소개</Title>
    <Bar></Bar>
    <Paragraph>
      <div>4차산업혁명시대를 이끌어 나갈 인재를 양성하는</div>
      <div>한양미래연구소의 교육 프로그램입니다.</div>
    </Paragraph>
  </SubTop>
);

export default SubTopComponent;
