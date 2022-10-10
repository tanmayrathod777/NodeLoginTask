import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { aPost } from "./../axios.instance";

const Registration = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleRegistration = () => {
    aPost("/user/adduser", formData)
      .then((res) => {
        localStorage.setItem("auth", res.data);
        navigate("/AllProducts");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="box">
      <h2>Registration Page</h2>
      <div className="inputField">
          <TextField
            label="Name"
            value={formData.userName}
            onChange={(e) => handleChange("userName", e.target.value)}
            fullWidth
          />
        </div>
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
          <Button variant="contained" onClick={() => handleRegistration()}>
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default Registration;
