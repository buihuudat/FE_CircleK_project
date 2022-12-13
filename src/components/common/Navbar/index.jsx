import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Badge, Container, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartModal,
  setSigninModal,
} from "../../../redux/reducers/modalReducer";
import SearchItem from "./SearchItem";
import { useState } from "react";

const dataNav = [
  {
    icon: <HomeIcon sx={{ width: "30px", height: "30px" }} />,
    text: "Hệ Thống Circle K",
    path: "he-thong-circle-k",
  },
  {
    icon: <CardGiftcardIcon sx={{ width: "30px", height: "30px" }} />,
    text: "Ưu Đãi Đặc Biệt",
    path: "uu-dai-dac-biet",
  },
  {
    icon: <FastfoodIcon sx={{ width: "30px", height: "30px" }} />,
    text: "Thức Ăn & Thức Uống",
    path: "thuc-an-thuc-uong",
  },
  {
    icon: <SupportAgentIcon sx={{ width: "30px", height: "30px" }} />,
    text: "Sản Phẩm & Dịch Vụ",
    path: "san-pham-dich-vu",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const [productsFT, setProductsFT] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((s) => s.user.data);
  const cart = useSelector((state) => state.products.addCart).length;
  const products = useSelector((state) => state.products.data);

  const cartHandleClick = () => {
    dispatch(setCartModal(true));
  };

  const userHandleClick = () => {
    const token = localStorage.getItem("token");
    token ? navigate("/profile") : dispatch(setSigninModal(true));
  };

  const handleSeach = (e) => {
    e.target.value.length === 0
      ? setProductsFT([])
      : setProductsFT(
          products.filter((u) => u.name.toLowerCase().includes(e.target.value))
        );
  };

  return (
    <AppBar position="fixed" sx={{ background: "#db291b", color: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems="center"
            justifyContent={"center"}
            m={(0, "auto")}
          >
            <img
              src="https://www.circlek.com.vn/wp-content/themes/circlek/images/img/logo-pc.svg"
              alt="logo"
              onClick={() => navigate("/")}
              style={{
                height: "40px",
                width: "100px",
                cursor: "pointer",
              }}
            />
            <a href="https://www.circlek.com.vn/vi/ck-club/">
              <img
                src="https://www.circlek.com.vn/wp-content/themes/circlek/images/img/ckclub.png"
                alt=""
                style={{
                  width: "50px",
                }}
              />
            </a>
            <a href="https://www.circlek.com.vn/ckgo/">
              <img
                src="https://www.circlek.com.vn/wp-content/themes/circlek/images/img/logo-ck-go.png"
                alt="logo"
                style={{
                  width: "50px",
                }}
              />
            </a>
            {dataNav.map((e, i) => (
              <Box
                component={Link}
                to={e.path}
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "120px",
                  alignItems: "center",
                  cursor: "pointer",
                  ml: 2,
                  gap: 0.5,
                  p: "10px",
                  background:
                    e.path === pathname.split("/")[1] ? "#b70e11" : "inherit",
                  "&:hover": { background: "#b70e11", transition: "1s ease" },
                }}
              >
                <Box>{e.icon}</Box>
                <Typography fontSize={".8rem"}>{e.text}</Typography>
              </Box>
            ))}
            <Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  onChange={handleSeach}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              {productsFT?.length > 0 && <SearchItem products={productsFT} />}
            </Box>
            <IconButton sx={{ ml: 2, mr: 2 }} onClick={cartHandleClick}>
              {cart > 0 ? (
                <Badge badgeContent={cart} color={"primary"}>
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </Badge>
              ) : (
                <ShoppingCartIcon sx={{ color: "white" }} />
              )}
            </IconButton>
            <IconButton onClick={userHandleClick}>
              <Avatar src={user.avatar || ""} alt={user.name || ""} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
