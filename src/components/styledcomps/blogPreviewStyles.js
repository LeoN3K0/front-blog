import styled from 'styled-components';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const PreviewCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  min-height: 650px;
  max-height: 650px; 
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto; 
  overflow: auto; 
  
`;

export const PreviewContent = styled(Box)`
  img {
    max-width: 100%;
    max-height: 50%;
  }
`;

export const PreviewTitle = styled(Typography)`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;
