import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from "../components/Footer";
import axios from 'axios';
import GoogleIcon from '@mui/icons-material/Google';

function StartingPage(props) {
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
     const res = await  axios.get('http://localhost:3000/auth/google')
    //  {
    //     // params: {
    //     //   response_type: 'code',
    //     //   redirect_uri: 'http://localhost:3000/auth/google/callback',
    //     //   scope: 'openid profile email',
    //     //   client_id: '1083930818228-315ljqpsga7g465kcdqhdtv0c3s7a64a.apps.googleusercontent.com',
    //     // },
    // //     withCredentials: true,
    // //     headers: {
    // //         'Access-Control-Allow-Origin': '*',
    // //         'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
    // //         'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
    // //     },
    // //   });
      
     
     console.log(res.data);
      console.log(res.data.userId);
      
      props.SetuserId (res.data.userId)
      navigate(`/api/user/${res.data.userId}`);
      } catch(err) {
       console.log(err)
      };
    }
    
    
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2" component="h1" style={{ marginBottom: '2rem', color: '#f5ba13',  marginTop: '12rem' }}>
        Welcome to ToDo App!
      </Typography>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }} >
      <Button component={Link} to="/api/login" variant="contained" style={{ width: '15%', marginRight: '1rem', backgroundColor: '#f5ba13' }}>
        Sign In
      </Button>
      <Button component={Link} to="/api/register" variant="contained" style={{ width: '15%', backgroundColor: '#f5ba13' }}>
        Register
      </Button>
      </div>
      <div style= {{display: 'flex', width: '100%', justifyContent: 'center',  marginTop: '1rem'}}>
      <Button  onClick={handleClick} variant="contained" style={{ width: '31%', height: '36px', backgroundColor: '#f5ba13' }}>
      <GoogleIcon style={{marginRight: '5px'}} />
      Sign in with Google
      </Button>
      </div>
      <Footer />
    </div>
  );
}

export default StartingPage;