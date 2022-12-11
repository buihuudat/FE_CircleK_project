import { Box, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../Footer";
import CartModal from "../modals/CartModal";
import InforUserPay from "../modals/InforUserPay";
import PayModal from "../modals/PayModal";
import SigninModal from "../modals/SigninModal";
import SignupModal from "../modals/SignupModal";

const AppLayout = () => {
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
        <PayModal />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppLayout;
