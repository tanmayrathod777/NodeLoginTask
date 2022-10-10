import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { aPost } from "./../axios.instance";

const AddProduct = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleAddProduct = () => {
    aPost("/product/addproduct", formData)
      .then((res) => {
        navigate("/allProducts");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="box">
        <h2>Add Product</h2>
        <div className="inputField">
          <TextField
            label="Product Name"
            value={formData.productName || ""}
            onChange={(e) => handleChange("productName", e.target.value)}
            fullWidth
          />
        </div>
        <div className="inputField">
          <TextField
            label="Price"
            value={formData.price || ""}
            onChange={(e) => handleChange("price", e.target.value)}
            fullWidth
          />
        </div>
        <div className="inputField">
          <TextField
            label="Description"
            value={formData.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
            fullWidth
          />
        </div>
        <div className="inputField">
          <Button variant="contained" onClick={() => handleAddProduct()}>
            Add Product
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
