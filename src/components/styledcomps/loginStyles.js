import { TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginPageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginCard = styled('div')`
  width: 400px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.grey[500]};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const CardContentWrapper = styled('div')`
  padding: 16px;
`;

export const FormTitle = styled('h2')`
  margin: 0 0 16px;
  text-align: center;
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(TextField)`
  margin-bottom: 16px;
`;

export const FormAction = styled(Button)`
  margin-bottom: 16px;
`;

export const FormLink = styled(Link)`
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const ErrorMessage = styled('div')`
  color: red;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const SuccessMessage = styled('div')`
  color: green;
  font-size: 16px;
  margin-bottom: 16px;
  text-align: center;
`;
