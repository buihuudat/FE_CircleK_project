import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../../api/productApi";
import { setProducts } from "../../../redux/reducers/productReducer";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { setProductModal } from "../../../redux/reducers/modalReducer";
import AddProductModal from "../../../components/modals/AddProductModal";
import ProductCard from "./ProductCard";

const Product = () => {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      const products = await productApi.getAllProducts();

      dispatch(setProducts(products));
    };
    getProduct();
  }, [dispatch]);

  return (
    <Box p={3} display="flex" flexDirection={"row"} flexWrap="wrap" gap={2}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Fab
        onClick={() => dispatch(setProductModal(true))}
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
    </Box>
  );
};

export default Product;
