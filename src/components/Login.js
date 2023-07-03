import React, { useState } from 'react';
import {
  LoginPageContainer,
  LoginCard,
  CardContentWrapper,
  FormTitle,
  Form,
  FormField,
  FormAction,
  FormLink
} from './styledcomps/loginStyles';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleRegisterLinkClick = () => {
    setIsRegister(!isRegister);
  };

  return (
    <LoginPageContainer>
      <LoginCard>
        <CardContentWrapper>
          {isRegister ? (
            <>
              <FormTitle>Register</FormTitle>
              <Form>
                <FormField label="Name" variant="outlined" />
                <FormField label="Email" variant="outlined" />
                <FormField label="Password" variant="outlined" type="password" />
                <FormAction variant="contained" color="primary">
                  Register
                </FormAction>
                <FormLink onClick={handleRegisterLinkClick}>Already have an account? Login here.</FormLink>
              </Form>
            </>
          ) : (
            <>
              <FormTitle>Login</FormTitle>
              <Form>
                <FormField label="Email" variant="outlined" />
                <FormField label="Password" variant="outlined" type="password" />
                <FormAction variant="contained" color="primary">
                  Login
                </FormAction>
                <FormLink onClick={handleRegisterLinkClick}>Don't have an account? Register here.</FormLink>
              </Form>
            </>
          )}
        </CardContentWrapper>
      </LoginCard>
    </LoginPageContainer>
  );
};

export default Login;