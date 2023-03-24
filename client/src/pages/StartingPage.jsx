 import { Link } from 'react-router-dom';
import React from 'react';

function StartingPage () {

return (
    
    <>
    <Link to="/api/login">Login</Link>
    <Link to="/api/register">Registration</Link>
    </>
)

}

export default StartingPage