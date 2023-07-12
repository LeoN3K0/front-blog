import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const EditBlogContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  justify-items: center;
  align-items: flex-start;
  height: 100vh;
  padding: 20px;
`;

export const EditBlogCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const EditBlogForm = styled('form')`
  margin-top: 5px;
`;

export const FormTitle = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FormLabel = styled(Typography)`
  display: block;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const FormInput = styled(TextField)`
  width: 100%;
  margin-bottom: 6px;
`;

export const FormButton = styled(Button)`
  padding: 8px 16px;
  margin-right: 8px;
`;

export const DeleteButton = styled(Button)`
  display: block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkred;
  }
`;

export const SaveButton = styled(Button)`
  display: block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const PublishButton = styled(Button)`
  display: block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const ButtonContainer = styled('div')`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const DeleteImageButton = styled(Button)`
  display: block;
  margin-top: 20px;
  padding: 4px 8px; 
  background-color: ${({ theme }) => theme.palette.error.main};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 12px; 
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.error.dark};
  }
`;

export const UploadButton = styled(Button)`
  display: block;
  width: 15px;
  margin-top: 20px;
  padding: 4px 8px; 
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 12px; 
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
