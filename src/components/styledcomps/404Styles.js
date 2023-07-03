import { styled } from '@mui/material/styles';

export const ErrorContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const ErrorText = styled('h2')`
  margin-bottom: 16px;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const BackButton = styled('button')`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
