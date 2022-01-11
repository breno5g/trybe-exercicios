import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin: 10px;
  border-radius: 0.25rem;
  border: 1px solid white;
  background-color: lightblue;
  overflow: hidden;
  color: black;

  &:disabled {
    filter: grayscale(80%);
  }
`;
