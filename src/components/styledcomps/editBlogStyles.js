import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const EditBlogContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const EditBlogCard = styled(Card)`
  width: 600px;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const EditBlogForm = styled('form')`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormTitle = styled(Typography)`
  margin-bottom: 16px;
`;

export const FormLabel = styled(Typography)`
  font-weight: bold;
`;

export const FormInput = styled(TextField)`
  width: 100%;
`;

export const EditorContainer = styled(Box)`
  border: 1px solid #ccc;
  border-radius: 4px;
  .rdw-editor-wrapper {
    padding: 8px;
    .rdw-editor-main {
      min-height: 200px;
    }
  }
`;

export const FormButton = styled(Button)`
  padding: 8px 16px;
  margin-right: 8px;
`;

export const DeleteButton = styled(Button)`
  background-color: red;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
`;
