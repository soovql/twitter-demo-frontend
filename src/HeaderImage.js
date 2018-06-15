import React from "react";
import styled from "styled-components";

import bgImg from "./img/CoverImage.png";

const HeaderImage = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  min-height: 300px;
`;

class HeaderImg extends React.Component {
  render() {
    return <HeaderImage />;
  }
}
export default HeaderImg;
