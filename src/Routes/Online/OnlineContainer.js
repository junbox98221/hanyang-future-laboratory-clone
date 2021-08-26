import React, { useState } from "react";
import OnlinePresenter from "./OnlinePresenter";

const OnlineContainer = () => {
  const [searchTerm, searchTermUpdate] = useState("");
  const [submitTerm, submitTermUpdate] = useState("");
  const [type, typeUpdate] = useState("");
  const [subTopData] = useState({
    subTitle: "Education",
    mainTitle: "교육 소개",
    eduConcept: "4차산업 관련 교육",
  });
  const [eduData] = useState([
    {
      imgUrl: "img/edu_img.PNG",
      type: "3D 체험",
      title: "3D프린팅 전문가",
    },
    {
      imgUrl: "img/3dPen.PNG",
      type: "3D 체험",
      title: "3D펜 디자이너",
    },
    {
      imgUrl: "img/garbage.PNG",
      type: "로봇 만들기",
      title: `초음파 센서로 "로봇 쓰레기통"만들기`,
    },
    {
      imgUrl: "img/dog.PNG",
      type: "로봇 만들기",
      title: `적외선 센서로 "강아지 자동차" 만들기`,
    },
    {
      imgUrl: "img/speaker.PNG",
      type: "로봇 만들기",
      title: `"블루투스 스피커" 만들기`,
    },
    {
      imgUrl: "img/ar.PNG",
      type: "특강",
      title: "나만의 AR 어플리케이션 만들기",
    },
    {
      imgUrl: "img/meta.PNG",
      type: "특강",
      title: "메타버스의 이해와 제페토 체험",
    },
    {
      imgUrl: "img/industry.PNG",
      type: "특강",
      title: "4차 산업혁명과 청소년 기업가정신",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitTermUpdate(searchTerm);
  };
  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    searchTermUpdate(value);
  };

  const AllCheck = () => {
    typeUpdate("");
  };
  const MakerCheck = () => {
    typeUpdate("3D 체험");
  };
  const CodingCheck = () => {
    typeUpdate("로봇 만들기");
  };
  const SpecialCheck = () => {
    typeUpdate("특강");
  };

  return (
    <OnlinePresenter
      handleSubmit={handleSubmit}
      subTopData={subTopData}
      searchTerm={searchTerm}
      updateTerm={updateTerm}
      eduData={eduData}
      submitTerm={submitTerm}
      AllCheck={AllCheck}
      MakerCheck={MakerCheck}
      CodingCheck={CodingCheck}
      SpecialCheck={SpecialCheck}
      type={type}
    />
  );
};

export default OnlineContainer;
