import styled from 'styled-components';

export default styled.button`
  background: ${({ white }) => (white ? '#1DA1F2' : 'white')};
  padding: 10px 15px;
  outline: none;
  border-radius: 100px;
  color: ${({ white }) => (white ? '#fff' : '#1DA1F2')};
  border: ${({ white }) => (white ? 'none' : '2px solid #1DA1F2')};
`;
