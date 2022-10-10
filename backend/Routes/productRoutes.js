const router=require("express").Router();
const product=require("../Controller/productController");



// Get All Products
router.get("/allproduct",product.authUser,product.getAllProducts);

// Get One Product
router.get("/getoneproduct/:id",product.authUser,product.getOneProduct);

//Add Product
router.post("/addproduct",product.authUser,product.addProduct);

//Delete Product
router.delete("/deleteproduct/:id",product.authUser,product.deleteProduct);

//Update product
router.put("/updateproduct/:id",product.authUser,product.updateProduct);

module.exports=router;