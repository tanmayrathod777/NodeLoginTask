import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { aGet, aPut } from "./../axios.instance";

const EditProduct = () => {
  let navigate = useNavigate();
  const { state } = useLocation();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    } else {
      aGet(`product/getoneproduct/${state.id}`)
        .then((res) => {
          setFormData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate,state.id]);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleEditProduct = () => {
    aPut(`product/updateproduct/${state.id}`, formData)
      .then((res) => {
        navigate("/AllProducts");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="box">
        <h2>Edit Product</h2>
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
          <Button variant="contained" onClick={() => handleEditProduct()}>
            Edit
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
