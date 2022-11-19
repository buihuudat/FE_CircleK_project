import * as React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import {
  Button,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const headerData = [
  {
    icon: <AccountBoxIcon />,
    text: "Profile",
    path: "profile",
  },
  {
    icon: <LocalMallIcon />,
    text: "Đơn hàng đã mua",
    path: "don-hang-da-mua",
  },
  {
    icon: <AttachMoneyIcon />,
    text: "Thống kê chi tiêu",
    path: "thong-ke-chi-tieu",
  },
];
export default function SideBar({ drawerWidth }) {
  const user = useSelector((s) => s.user.data);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("UID");
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: drawerWidth,
        position: "fixed",
        flexDirection: "column",
        // minHeight: "45vh",
      }}
    >
      <Typography variant="h6" fontWeight={600} align="center">
        Chào {user.name}
      </Typography>
      <MenuList>
        {headerData.map((e, i) => (
          <MenuItem
            key={i}
            sx={path === e.path && { bgcolor: "rgba(0,0,0,.05)" }}
            onClick={() => navigate(e.path)}
          >
            <ListItemIcon>{e.icon}</ListItemIcon>
            <ListItemText>{e.text}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
      <Button
        fullWidth
        variant="outlined"
        color="error"
        onClick={handleLogout}
        sx={{
          mt: "1rem",
          height: "50px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <LogoutIcon />
        <Typography>Đăng xuất</Typography>
      </Button>
    </Box>
  );
}
