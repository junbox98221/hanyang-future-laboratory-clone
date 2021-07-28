import styled from "styled-components";
import SubTitle from "Components/EduDetailComponent/SubTitle";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: -2px;
  height: 100%;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 100px 700px;
  margin: 50px 0;
  font-weight: 500;
`;

const Key = styled.div`
  background-color: #e8e8e8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px dotted white;
`;
const Value = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 30px 30px;
  border-bottom: 2px dotted #e8e8e8;

  li {
    padding: 5px 0;
  }
`;

const LiRed = styled.li`
  color: red;
`;
const DetailIntro = ({ Detail }) => {
  const {
    subject,
    target,
    personnel,
    expense,
    time,
    place,
    material,
    result,
    question,
  } = Detail;
  return (
    <Section>
      <SubTitle title={"교육 소개"} />
      <GridSection>
        <Key>
          <div>{subject[0]}</div>
        </Key>
        <Value>
          {target.map((item, index) => (
            <li>{item}</li>
          ))}
        </Value>
        <Key>
          <div>{subject[1]}</div>
        </Key>
        <Value>
          {personnel.map((item, index) => (
            <li>{item}</li>
          ))}
        </Value>
        <Key>
          <div>{subject[2]}</div>
        </Key>
        <Value>
          {expense.map((item, index) => (
            <LiRed>{item}</LiRed>
          ))}
        </Value>
        <Key>
          <div>{subject[3]}</div>
        </Key>
        <Value>
          {time.map((item, index) => (
            <li>{item}</li>
          ))}
        </Value>
        <Key>
          <div>{subject[4]}</div>
        </Key>
        <Value>
          {place.map((item, index) => (
            <li>{item}</li>
          ))}
        </Value>
        <Key>
          <div>{subject[5]}</div>
        </Key>
        <Value>
          {material.map((item, index) => (
            <li>{item}</li>
          ))}
        </Value>
        <Key>
          <div>{subject[6]}</div>
        </Key>
        <Value>
          {result.map((item, index) => (
            <li>{item}</li>
          ))}
        </Value>
        <Key>
          <div>{subject[7]}</div>
        </Key>
        <Value>
          {question.map((item, index) => (
            <li>{item}</li>
          ))}
        </Value>
      </GridSection>
    </Section>
  );
};

export default DetailIntro;
