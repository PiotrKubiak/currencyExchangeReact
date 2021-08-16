import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 800px;
  margin: 15px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.cararra};
  box-shadow: 0 0 40px ${({ theme }) => theme.color.white};
  border-radius: 15px;
`;
