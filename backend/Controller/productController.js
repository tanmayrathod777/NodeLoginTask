require("dotenv").config();
const db = require("../models/index");
const product = db.Product;
const jwt = require("jsonwebtoken");

const getAllProducts = async (req, res) => {
  await product
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const authUser = (req, res, next) => {
  const bearer = req.headers["authorization"];
  if (bearer) {
    const bearertoken = bearer.split(" ")[1];
    req.token = bearertoken;
    jwt.verify(req.token, process.env.JWT_SECRET_KEY, (err, data) => {
      if (err) {
        res.send("not found");
      } else {
        next();
      }
    });
  } else {
    res.send({ message: "Token Not Found." });
  }
};

//Add Product
const addProduct = async (req, res) => {
  const productInfo = {
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description
  };
  await product
    .create(productInfo)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Delete Product
const deleteProduct = (req, res) => {
  const id = req.params.id;
  console.log(id, "/*/*");
  product
    .destroy({
      where: { id: id }
    })
    .then((data) => {
      if (num == 1) {
        res.send(data);
      } else {
        res.send(
          `Cannot delete Product with id=${id}. Maybe Tutorial was not found!`
        );
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

//Update Product
const updateProduct = (req, res) => {
  const id = req.params.id;

  const productInfo = {
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description
  };

  product
    .update(productInfo, {
      where: { id: id }
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

//Get Single Product
const getOneProduct = (req, res) => {
  const id = req.params.id;

  product
    .findOne({ where: { id: id } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("Not Found!");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getAllProducts,
  authUser,
  addProduct,
  deleteProduct,
  updateProduct,
  getOneProduct
};
