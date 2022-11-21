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
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PeopleIcon from "@mui/icons-material/People";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import InventoryIcon from "@mui/icons-material/Inventory";
const headerData = [
  {
    icon: <AccountBoxIcon />,
    text: "Profile",
    path: "profile",
    display: 1,
  },
  {
    icon: <LocalMallIcon />,
    text: "Đơn hàng đã mua",
    path: "don-hang-da-mua",
    display: 1,
  },
  {
    icon: <AttachMoneyIcon />,
    text: "Thống kê chi tiêu",
    path: "thong-ke-chi-tieu",
    display: 1,
  },
  {
    icon: <AdminPanelSettingsIcon />,
    text: "Admin Page",
    path: "admin",
    display: 1,
  },
  {
    icon: <PeopleIcon />,
    text: "Users",
    path: "admin/users",
    display: 1,
  },
  {
    icon: <ProductionQuantityLimitsIcon />,
    text: "Products",
    path: "admin/products",
    display: 1,
  },
  {
    icon: <SwitchAccountIcon />,
    text: "Producers",
    path: "admin/producers",
    display: 1,
  },
  {
    icon: <InventoryIcon />,
    text: "Orders",
    path: "admin/orders",
    display: 1,
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
        {headerData.map(
          (e, i) =>
            e.display && (
              <MenuItem
                key={i}
                sx={path === e.path && { bgcolor: "rgba(0,0,0,.05)" }}
                onClick={() => navigate(e.path)}
              >
                <ListItemIcon>{e.icon}</ListItemIcon>
                <ListItemText>{e.text}</ListItemText>
              </MenuItem>
            )
        )}
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
