import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import AppLayout from "./components/layout/AppLayout";
import FoodDrink from "./pages/FoodAndDrink";
import HomePage from "./pages/Home";
import MapStore from "./pages/MapStore";
import ProductServices from "./pages/ProductServices";
import UuDaiDacBiet from "./pages/UuDaiDB";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="/he-thong-circle-k" element={<MapStore />} />
            <Route path="/uu-dai-dac-biet" element={<UuDaiDacBiet />} />
            <Route path="/thuc-an-thuc-uong" element={<FoodDrink />} />
            <Route path="/san-pham-dich-vu" element={<ProductServices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
