import React from "react";
import SubTop from "Components/SubTop";
import Poster from "Components/Poster";
// import styled from "styled-components";

// const Box = styled.div`
//   width: 50vw;
//   height: 500px;
//   &:after {
//     content: "";
//     display: block;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       to bottom,
//       rgba(#e8a, 1),
//       rgba(#def, 0) 80%,
//       rgba(white, 0.5)
//     );
//     z-index: 11;
//     transform: translate3d(0, 0, 0);
//   }
//   @keyframes drift {
//     from {
//       transform: rotate(0deg);
//     }
//     from {
//       transform: rotate(360deg);
//     }
//   }
//   .wave {
//     opacity: 0.4;
//     position: absolute;
//     top: 3%;
//     left: 50%;
//     background: #0af;
//     width: 500px;
//     height: 500px;
//     margin-left: -250px;
//     margin-top: -250px;
//     transform-origin: 50% 48%;
//     border-radius: 43%;
//     animation: drift 3000ms infinite linear;
//   }
// `;

// const WaveOne = styled.div``;
// const WaveThree = styled.div`
//   animation: drift 5000ms infinite linear;
// `;
// const WaveTwo = styled.div`
//   animation: drift 7000ms infinite linear;
//   opacity: 0.1;
//   background: yellow;
// `;

const Introduce = (props) => {
  const { data, subTopData } = props;
  return (
    <>
      <SubTop subTopData={subTopData} />
      <Poster data={data} download />
      {/* <Box>
        <WaveOne className="wave" />
        <WaveTwo className="wave" />
        <WaveThree className="wave" />
      </Box> */}
    </>
  );
};

export default Introduce;
