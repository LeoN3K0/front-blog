import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from '../AuthContext';
import {
  LoginPageContainer,
  LoginCard,
  CardContentWrapper,
  FormTitle,
  Form,
  FormField,
  FormAction,
  FormLink,
  ErrorMessage,
  SuccessMessage
} from '../styles/loginStyles';

const Login = () => {
  let navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const { setIsLoggedIn } = useAuth();

  const handleRegisterLinkClick = () => {
    setIsRegister(!isRegister);
    setFormErrors({});
    setIsRegistrationSuccess(false); // Reset registration success message when switching between register/login
  };

  const handleRegister = async () => {
    // Validate form inputs
    const errors = {};
    if (!email) {
      errors.email = 'Please enter an email.';
    }
    if (!username) {
      errors.username = 'Please enter a username.';
    }
    if (!password) {
      errors.password = 'Please enter a password.';
    }
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    const requestData = {
      email: email,
      username: username,
      password: password
    };
  
    try {
      await axios.post('https://back-blog-e8li.onrender.com/register', requestData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Reset form fields on successful registration
      setEmail('');
      setUsername('');
      setPassword('');
      setFormErrors({});
      setIsRegistrationSuccess(true);
  
      // Automatically log in the user after registration
      const loginData = {
        usernameOrEmail: username,
        password: password
      };
      await handleLogin(loginData); // Call handleLogin with registration credentials
    } catch (error) {
      console.log(error);
      setFormErrors({ general: 'Unable to register.' });
    }
  };
  

  const handleLogin = async(loginData) => {
    // Validate form inputs
    const errors = {};
    if (!username && !email) {
      errors.usernameOrEmail = 'Please enter a username or email.';
    }
    if (!password) {
      errors.password = 'Please enter a password.';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    const requestData = loginData || {
      usernameOrEmail: username || email,
      password: password
    };    
  
    axios
      .post('https://back-blog-e8li.onrender.com/signin', requestData, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => {
        const token = response.data.token;
        Cookies.set('jwt', token, { sameSite: 'none', secure: true, expires: 7 });
        // Reset form fields on successful login
        setUsername('');
        setEmail('');
        setPassword('');
        setFormErrors({});
        setIsLoggedIn(true);
        navigate("/front-blog");
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        setFormErrors({ general: 'Wrong credentials.' });
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (isRegister) {
        handleRegister();
      } else {
        handleLogin();
      }
    }
  };

  return (
    <LoginPageContainer>
      <LoginCard>
        <CardContentWrapper>
          {isRegistrationSuccess ? (
            <>
              <SuccessMessage>Registration Successful!</SuccessMessage>
              <FormAction variant="contained" color="primary" onClick={handleRegisterLinkClick}>
                Go back to Login
              </FormAction>
            </>
          ) : (
            <>
              {isRegister ? (
                <>
                  <FormTitle>Register</FormTitle>
                  <Form>
                    <FormField
                      label="Username"
                      variant="outlined"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      error={Boolean(formErrors.username)}
                      onKeyDown={handleKeyDown}
                    />
                    {formErrors.username && <ErrorMessage>{formErrors.username}</ErrorMessage>}
                    <FormField
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      error={Boolean(formErrors.email)}
                      onKeyDown={handleKeyDown}
                    />
                    {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
                    <FormField
                      label="Password"
                      variant="outlined"
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      error={Boolean(formErrors.password)}
                      onKeyDown={handleKeyDown}
                    />
                    {formErrors.password && <ErrorMessage>{formErrors.password}</ErrorMessage>}
                    <FormAction variant="contained" color="primary" onClick={handleRegister}>
                      Register
                    </FormAction>
                    <FormLink onClick={handleRegisterLinkClick}>Already have an account? Login here.</FormLink>
                  </Form>
                </>
              ) : (
                <>
                  <FormTitle>Login</FormTitle>
                  <Form>
                    <FormField
                      label="Username or Email"
                      variant="outlined"
                      value={username || email}
                      onChange={e => {
                        setUsername(e.target.value);
                        setEmail(e.target.value);
                      }}
                      error={Boolean(formErrors.usernameOrEmail)}
                      onKeyDown={handleKeyDown}
                    />
                    {formErrors.usernameOrEmail && <ErrorMessage>{formErrors.usernameOrEmail}</ErrorMessage>}
                    <FormField
                      label="Password"
                      variant="outlined"
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      error={Boolean(formErrors.password)}
                      onKeyDown={handleKeyDown}
                    />
                    {formErrors.password && <ErrorMessage>{formErrors.password}</ErrorMessage>}
                    <FormAction variant="contained" color="primary" onClick={handleLogin}>
                      Login
                    </FormAction>
                    <FormLink onClick={handleRegisterLinkClick}>Don't have an account? Register here.</FormLink>
                  </Form>
                </>
              )}
              {formErrors.general && <ErrorMessage>{formErrors.general}</ErrorMessage>}
            </>
          )}
        </CardContentWrapper>
      </LoginCard>
    </LoginPageContainer>
  );
};

export default Login;
