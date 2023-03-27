import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../components/Footer";




function Login(props) {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
      ].join(','),
    },
  });
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
        username: email,
        password: password,
      });
      console.log(res.data);
      console.log(res.data.userId);
    props.SetuserId (res.data.userId)
    navigate(`/user/${res.data.userId}`);
    } catch (err) {
      console.error(error);
      setError('Invalid email or password.');
      console.log(err);
    }
  };

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#f5ba13' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error && (
            <Typography variant="body2" color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleEmailChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <TextField
              onChange={handlePasswordChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#f5ba13' }}
            >
              Sign In
            </Button>
            
          </Box>
        </Box>
        
      </Container>
      <Footer />
    </ThemeProvider>




    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" id="email" value={email} onChange={handleEmailChange} required />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password:</label>
    //       <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
}

export default Login;