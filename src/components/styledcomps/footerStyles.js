import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.common.white};
  padding: 20px;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
