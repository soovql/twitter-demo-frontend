import styled from "styled-components";

export const Button = styled.button`
  background: ${props => (props.primary ? "#1DA1F2" : "white")};
  color: ${props => (props.primary ? "white" : "#1DA1F2")};
  border: ${props => (props.primary ? "none" : "1px solid #1DA1F2")};
  padding: 10px 15px;
  outline: none;
  border-radius: 100px;
  margin-right: 18px;
`;
