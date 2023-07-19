import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorContainer, ErrorText, BackButton } from '../styledcomps/404Styles';

const NotFoundPage = () => {
  return (
    <ErrorContainer>
      <ErrorText>404 - Page Not Found</ErrorText>
      <BackButton as={Link} to="/">Go Back to Home</BackButton>
    </ErrorContainer>
  );
};

export default NotFoundPage;
