import { Box, Toolbar } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import productApi from "../../api/productApi";
import { setProducts } from "../../redux/reducers/productReducer";
import Navbar from "../common/Navbar";
import Footer from "../Footer";
import AboutProductModal from "../modals/AboutProductModal";
import CartModal from "../modals/CartModal";
import InforUserPay from "../modals/InforUserPay";
import PayModal from "../modals/PayModal";
import SigninModal from "../modals/SigninModal";
import SignupModal from "../modals/SignupModal";
import AddProducerModal from "../modals/AddProducerModal";

const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const products = await productApi.getAllProducts();
      dispatch(setProducts(products));
    };
    getProducts();
  }, [dispatch]);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Navbar />
      <Box flexGrow={1}>
        <Toolbar />
        <Outlet />
        <CartModal />
        <SigninModal />
        <SignupModal />
        <InforUserPay />
        <AboutProductModal />
        <AddProducerModal />
        <PayModal />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
