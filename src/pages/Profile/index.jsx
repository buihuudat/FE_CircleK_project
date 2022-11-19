import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./Sidebar";
import axiosClient from "../../api/axiosClient";
import { setUser } from "../../redux/reducers/userReducer";
import Noti from "../../components/common/Toast";
import FileBase64 from "react-file-base64";
import GetImage from "../../components/GetImage";

const Profile = () => {
  const [disable, setDisable] = useState(true);
  const [nameErrText, setNameErrText] = useState("");
  const [phoneErrText, setPhoneErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState("");
  const [addressErrText, setAddressErrText] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const drawerWidth = "220px";

  const handleGetImage = (e) => {
    GetImage(e.base64);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      id: user.id,
      name: formData.get("name"),
      password:
        formData.get("password") === user.password
          ? user.password
          : formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      phone: Number(formData.get("phone")),
      permission: 1,
      address: formData.get("address"),
    };

    let err = false;
    if (data.phone === "") {
      setPhoneErrText("Bạn chưa nhập số điện thoại");
      err = true;
    }
    if (data.phone.length < 10 || data.phone.length > 11) {
      setPhoneErrText("Số điện thoại không hợp lệ");
      err = true;
    }
    if (data.name === "") {
      setNameErrText("Bạn chưa nhập tên");
      err = true;
    }
    if (data.password === "") {
      setPasswordErrText("Bạn chưa nhập mật khẩu");
      err = true;
    }
    if (data.password.length < 6) {
      setPasswordErrText("Mật khẩu yêu cầu tối thiểu 6 kí tự");
      err = true;
    }
    if (data.password !== data.confirmPassword) {
      setConfirmPasswordErrText("Mật khẩu không khớp");
      err = true;
    }
    if (data.address === "") {
      setAddressErrText("Bạn chưa nhập địa chỉ");
      err = true;
    }

    if (err) return;

    setNameErrText("");
    setPhoneErrText("");
    setPasswordErrText("");
    setConfirmPasswordErrText("");
    setAddressErrText("");
    setLoading(true);
    try {
      const res = await axiosClient.put(`User/${user.id}`, data);
      dispatch(setUser(res));
      setLoading(false);
      setDisable(true);
      Noti("success", "Đã cập nhật thành công");
    } catch (error) {
      Noti("error", error.data);
    }
  };

  const handleCancel = () => {
    setDisable(true);
    setLoading(false);
  };

  return (
    <Box display={"flex"} sx={{ minHeight: "calc(100vh - 60px)" }}>
      <SideBar drawerWidth={drawerWidth} />
      <Box pl={drawerWidth} display="flex" flexGrow={1}>
        <Paper
          sx={{
            m: "0 auto",
            display: "flex",
            mt: 10,
            // mb: 10,
            p: 3,
            flexDirection: "column",
            height: "max-content",
          }}
        >
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: "100px", height: "100px", m: "0 auto" }}
          />
          <FileBase64 multiple={false} onDone={handleGetImage} />
          <Box component={"form"} onSubmit={handleSubmit} pt={3} width={345}>
            <TextField
              margin="normal"
              fullWidth
              name="username"
              defaultValue={user.username}
              disabled
              label="Tài khoản"
            />
            <TextField
              margin="normal"
              fullWidth
              name="name"
              defaultValue={user.name}
              disabled={disable}
              label="Tên"
              error={nameErrText !== ""}
              helperText={nameErrText}
            />
            <TextField
              margin="normal"
              fullWidth
              name="phone"
              type={"text"}
              defaultValue={user.phone}
              disabled={disable}
              label="Số điện thoại"
              error={phoneErrText !== ""}
              helperText={phoneErrText}
            />
            <TextField
              margin="normal"
              fullWidth
              type={"password"}
              name="password"
              defaultValue={user.password}
              disabled={disable}
              label="Mật khẩu"
              error={passwordErrText !== ""}
              helperText={passwordErrText}
            />
            <TextField
              margin="normal"
              fullWidth
              type={"password"}
              name="confirmPassword"
              defaultValue={user.password}
              label="Nhập lại mật khẩu"
              disabled={disable}
              sx={{ display: disable ? "none" : "block" }}
              error={confirmPasswordErrText !== ""}
              helperText={confirmPasswordErrText}
            />
            <TextField
              margin="normal"
              fullWidth
              type={"text"}
              name="address"
              defaultValue={user.address}
              label="Địa chỉ"
              disabled={disable}
              error={addressErrText !== ""}
              helperText={addressErrText}
            />
            <Box
              sx={{
                pb: "auto",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, display: disable ? "block" : "none" }}
                onClick={() => setDisable(false)}
              >
                Chỉnh sửa
              </Button>
              <Box
                flexDirection={"column"}
                gap={2}
                sx={{
                  display: disable ? "none" : "flex",
                }}
              >
                <LoadingButton
                  fullWidth
                  variant="contained"
                  color="success"
                  type={"submit"}
                  loading={loading}
                >
                  Cập nhật
                </LoadingButton>
                <Button
                  fullWidth
                  variant="contained"
                  color="warning"
                  onClick={handleCancel}
                >
                  Hủy
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;
