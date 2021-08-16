import styled from "styled-components";

export const LabelText = styled.span`
  width: 100%;
  max-width: 200px;
  display: inline-block;
  margin-right: 10px;
`;

export const Field = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 12px;
`;

export const Button = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  width: 50%;
  padding: 12px 32px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s linear;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.2);
  }
  &:activ {
    filter: brightness(110%);
  }
`;

export const Header = styled.h1`
  margin: 20 auto;
  text-align: center;
`;

export const Info = styled.p`
  text-align: center;
  padding: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.emperor};
`;
