import { Box, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../Footer";
import ProductModal from "../modals/ProductModal";
import CartModal from "../modals/CartModal";
import SigninModal from "../modals/SigninModal";
import SignupModal from "../modals/SignupModal";

const AppLayout = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Navbar />
      <Box flexGrow={1}>
        <Toolbar />
        <Outlet />
        <ProductModal />
        <CartModal />
        <SigninModal />
        <SignupModal />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
