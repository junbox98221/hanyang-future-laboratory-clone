import React from "react";
import SubTop from "Components/SubTop";
import Poster from "Components/Poster";

const Introduce = (props) => {
  const { data, subTopData } = props;
  return (
    <>
      <SubTop subTopData={subTopData} />
      <Poster data={data} download />
    </>
  );
};

export default Introduce;
