import React from "react";
import styled from "styled-components";
import SubTop2 from "Components/SubTop2";
import EduList from "Components/SearchEdu/EduList";

const SearchSection = styled.section`
  padding: 40px 13vw;
`;

const Form = styled.form`
  height: 30px;
  margin-left: auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  all: unset;
  padding-left: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 0;
  width: 200px;
  opacity: 0.6;
  font-size: 15px;

  &:focus {
    box-shadow: #66afe9 0px 7px 29px 0px;
  }
`;

const EduGridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(2, 400px);
  grid-gap: 30px;
`;

const Button = styled.button`
  all: unset;
  width: 70px;
  height: 100%;
  text-align: center;
  margin-left: 10px;
  background-color: var(--main-color);
  color: white;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
`;

const TypeButton = styled.button`
  all: unset;
  background-color: white;
  width: 23%;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
  :focus {
    color: white;
    background-color: var(--main-color);
  }
  :hover {
    border: 1px solid var(--main-color);
  }
`;

const OnlinePresenter = ({
  subTopData,
  handleSubmit,
  searchTerm,
  updateTerm,
  eduData,
  submitTerm,
  AllCheck,
  MakerCheck,
  CodingCheck,
  SpecialCheck,
  type,
}) => (
  <>
    <SubTop2 subTopData={subTopData} />
    <SearchSection>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="검색"
          value={searchTerm || ""}
          onChange={updateTerm}
        />
        <Button onClick={handleSubmit}>검색</Button>
      </Form>
      <ButtonSection>
        <TypeButton onClick={AllCheck}>ALL</TypeButton>
        <TypeButton onClick={MakerCheck}>3D 체험</TypeButton>
        <TypeButton onClick={CodingCheck}>로봇 만들기</TypeButton>
        <TypeButton onClick={SpecialCheck}>특강</TypeButton>
      </ButtonSection>
      <EduGridSection>
        {eduData
          .filter(
            (item) =>
              item.title.includes(submitTerm) && item.type.includes(type)
          )
          .map((item, index) => (
            <EduList
              key={index}
              imgUrl={item.imgUrl}
              type={item.type}
              title={item.title}
            />
          ))}
      </EduGridSection>
    </SearchSection>
  </>
);

export default OnlinePresenter;
