import styled from 'styled-components';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const EditorContainer = styled(Box)`
  .ql-toolbar {
    background-color: #f8f8f8;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 4px 4px 0 0;
  }

  .ql-container {
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    height: 200px;
    overflow-y: auto;

    .ql-editor {
      font-size: 14px;
      padding: 8px;
    }
  }
`;

export const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  & .modal-content {
    background-color: ${(props) => props.theme.palette.background.default};
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const UrlInput = styled(TextField)`
  width: 100%;
`;

export const ModalButton = styled(Button)`
  width: 100%;
  margin: 5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const CancelButton = styled(Button)`
  width: 100%;
  margin: 5px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const ModalOrText = styled(Typography)`
  text-align: center;
`;