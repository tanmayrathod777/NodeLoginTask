import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginPage.css";
import { aPost } from "./../axios.instance";

const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleLogin = () => {
    aPost("/user/login", formData)
      .then((res) => {
        localStorage.setItem("auth", res.data);
        navigate("/allProducts");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleRegister = () => {
    navigate("/registration");
  };
  return (
    <>
      <div className="title">
        <h1>AmazonClone</h1>
      </div>
      <div className="box">
        <h2>Login Page</h2>
        <div className="inputField">
          <TextField
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            fullWidth
          />
        </div>
        <div className="inputField">
          <TextField
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            fullWidth
          />
        </div>
        <div className="inputField">
          <Button variant="contained" onClick={() => handleLogin()}>
            Login
          </Button>
        </div>
      </div>
      <p>If you have not register then you can register from here...</p>

      <div className="registerbtn">
        <Button variant="contained" onClick={() => handleRegister()}>
          Register
        </Button>
      </div>
    </>
  );
};

export default Login;
