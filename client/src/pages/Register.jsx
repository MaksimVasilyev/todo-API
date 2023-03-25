import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
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


function Register(props) {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
      ].join(','),
    },
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      try {
      const res = await axios.post("http://localhost:3000/api/register", {username: formData.email, password: formData.password});  
      console.log(res.data);
      props.SetuserId (res.data.userId);
      navigate(`/api/user/${res.data.userId}`);
      } catch (err) {
      setError(err.response.data.message);
      }
     } else {setError(error)}
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
          Registration
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={handleInputChange}
            value = {formData.email}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            //autoComplete="email"
            autoFocus
            
          />
          <TextField
            onChange={handleInputChange}
            value={formData.password}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
           // autoComplete="current-password"
          />
          <TextField
            onChange={handleInputChange}
            value = {formData.confirmPassword}
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            //autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: '#f5ba13' }}
          >
            Registration
          </Button>
          
        </Box>
      </Box>
      <Footer />
    </Container>
   
    </ThemeProvider>




    // <div>
    //   <h1>Registration</h1>
    //   {error && <div>{error}</div>}
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Email:</label>
    //       <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
    //     </div>
    //     <div>
    //       <label>Password:</label>
    //       <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
    //     </div>
    //     <div>
    //       <label>Confirm Password:</label>
    //       <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
    //     </div>
    //     <button type="submit">Register</button>
    //   </form>
    // </div>
  );
}

export default Register;