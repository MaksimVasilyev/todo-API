import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Register(props) {
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
    <div>
      <h1>Register</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;