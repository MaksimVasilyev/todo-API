import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from "../components/Footer";

function StartingPage() {
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
      <Footer />
    </div>
  );
}

export default StartingPage;