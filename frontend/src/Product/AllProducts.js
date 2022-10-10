import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Delete from "@mui/icons-material/Delete";
import { aGet, aDelete } from "./../axios.instance";
import "./product.css";
import Edit from "@mui/icons-material/Edit";

const AllProducts = () => {
  let navigate = useNavigate();
  const [productlist, setProductList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
    getAllProducts();
  }, [navigate]);

  const getAllProducts = () => {
    aGet("/product/allproduct")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    aDelete(`/product/deleteproduct/${id}`)
      .then((res) => {
        console.log("Deleted...");
        getAllProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdate = (id) => {
    navigate(`/editproduct`, { state: { id: id } });
  };
  const handleAddProduct = () => {
    navigate("/addproduct");
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <>
      <div className="logout">
        <Link variant="contained" onClick={handleLogout}>
          Logout
        </Link>
      </div>
      <div className="header">Products</div>
      <div className="addbtn">
        <Button variant="contained" onClick={handleAddProduct}>
          Add Product
        </Button>
      </div>
      <div>
        {productlist.map((product) => {
          return (
            <div className="col">
              <div className="btn">
                <Button onClick={() => handleDelete(product.id)}>
                  <Delete />
                </Button>
              </div>
              <div className="btn">
                <Button onClick={() => handleUpdate(product.id)}>
                  <Edit />
                </Button>
              </div>
              <br />
              <h3>{product.productName || "NA"}</h3>
              <h4>Price : {product.price || "NA"}</h4>
              <p>{product.description || "NA"}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;
