import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "./components/common/Loading";
import AppLayout from "./components/layout/AppLayout";
import FoodDrink from "./pages/FoodAndDrink";
import HomePage from "./pages/Home";
import MapStore from "./pages/MapStore";
import ProductServices from "./pages/ProductServices";
import UuDaiDacBiet from "./pages/UuDaiDB";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import AuthLayout from "./components/layout/AuthLayout";
import DaMua from "./pages/Profile/DaMua";
import ThongKeChiTieu from "./pages/Profile/thongKeChiTieu";
import AdminLayout from "./components/layout/AdminLayout";
import Home from "./pages/Admin/Home";
import User from "./pages/Admin/User";
import Product from "./pages/Admin/Product";
import Producer from "./pages/Admin/Producer";
import Orders from "./pages/Admin/Orders";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="/he-thong-circle-k" element={<MapStore />} />
            <Route path="/uu-dai-dac-biet" element={<UuDaiDacBiet />} />
            <Route path="/thuc-an-thuc-uong" element={<FoodDrink />} />
            <Route path="/san-pham-dich-vu" element={<ProductServices />} />
            <Route path="" element={<AuthLayout />}>
              <Route path="profile" element={<Profile />} />
              <Route path="don-hang-da-mua" element={<DaMua />} />
              <Route path="thong-ke-chi-tieu" element={<ThongKeChiTieu />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="" element={<Home />} />
                <Route path="users" element={<User />} />
                <Route path="products" element={<Product />} />
                <Route path="producers" element={<Producer />} />
                <Route path="orders" element={<Orders />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
