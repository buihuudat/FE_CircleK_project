import { Box, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../Footer";
import ProductModel from "../modals/ProductModal";

const AppLayout = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Navbar />
      <Box flexGrow={1}>
        <Toolbar />
        <Outlet />
        <ProductModel />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
