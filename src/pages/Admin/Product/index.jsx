import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../../api/productApi";
import { Box, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { setAddProductModal } from "../../../redux/reducers/modalReducer";
import AddProductModal from "../../../components/modals/AddProductModal";
import ProductCard from "./ProductCard";
import EditProductModal from "../../../components/modals/EditProductModal";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    const getProduct = async () => {
      const products = await productApi.getAllProducts();
      setProducts(products);
    };
    getProduct();
  }, [dispatch]);

  return (
    <Box p={3} display="flex" flexDirection={"row"} flexWrap="wrap" gap={2}>
      {products.length === 0 && (
        <Typography align="center" variant="h5" fontWeight={600}>
          Chưa có sản phẩm...
        </Typography>
      )}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          admin={user.permission}
        />
      ))}
      <Fab
        onClick={() => dispatch(setAddProductModal(true))}
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          m: 5,
        }}
      >
        <AddIcon />
      </Fab>
      <AddProductModal />
      <EditProductModal />
    </Box>
  );
};

export default Product;
