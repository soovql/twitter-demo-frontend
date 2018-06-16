import React from "react";
import styled from "styled-components";

const HeaderImage = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/img/CoverImage.png"});
  background-size: cover;
  min-height: 300px;
`;

class HeaderImg extends React.Component {
  render() {
    return <HeaderImage />;
  }
}
export default HeaderImg;
