import { Box } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UserAdminModal from "../modals/UserAdminModal";

const AdminLayout = () => {
  const [loading, setLoading] = useState(true);
  return (
    loading && (
      <Box>
        <Outlet />
        <UserAdminModal />
      </Box>
    )
  );
};

export default AdminLayout;
