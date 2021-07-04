import React from 'react';
import { Link } from 'react-router-dom';
import userContext from '../utils/userContext';

const Login = () => {
  const { state, dispatch } = userContext(userContext);
  const { inputs, setInputs } = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      email: inputs.email,
      password: inputs.password,
    };
    const url = 'http://localhost5000/api/v1/users/login';
    try {
      dispatch({ type: 'Loading' });
      const {
        data: { data },
      } = await axios.post(url, inputData);
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div>
      <h1>This is Login Page</h1>
    </div>
  );
};

export default Login;
