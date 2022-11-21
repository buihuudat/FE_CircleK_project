import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setUserAdminModal } from "../../redux/reducers/modalReducer";
import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "center",
};

export default function UserAdminModal() {
  const [disable, setDisable] = useState(true);
  const [nameErrText, setNameErrText] = useState("");
  const [phoneErrText, setPhoneErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [value, setValue] = useState(1);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.modal.userAdmin);
  const open = user.status;
  const data = user.data;
  const handleClose = () => {
    dispatch(setUserAdminModal({ status: false, data: {} }));
    setDisable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const getData = {
      name: formData.get("name"),
      password: formData.get("password"),
      phone: formData.get("phone"),
      permission: value,
      confirmPassword: formData.get("confirmPassword"),
    };
    let err = false;
    if (getData.name === "") {
      setNameErrText("Bạn chưa nhập tên");
      err = true;
    }
    if (getData.phone === "") {
      setPhoneErrText("Bạn chưa nhập số điện thoại");
      err = true;
    }
    if (getData.phone.length < 9 || getData.phone.length > 11) {
      setPhoneErrText("Số điện thoại không hợp lệ");
      err = true;
    }
    if (getData.password === "") {
      setPasswordErrText("Bạn chưa nhập mật khẩu");
      err = true;
    }
    if (getData.confirmPassword === "") {
      setConfirmPassword("Mật khẩu không khớp");
      err = true;
    }
    if (getData.password !== getData.confirmPassword) {
      setConfirmPassword("Mật khẩu không khớp");
      err = true;
    }

    if (err) return;

    console.log(getData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar
            src={data.avatar}
            alt={data.name}
            sx={{
              width: "100px",
              height: "100px",
              m: "0 auto",
            }}
          />
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              name={"name"}
              margin={"normal"}
              label={"Tên"}
              fullWidth
              defaultValue={data.name}
              disabled={disable}
              error={nameErrText !== ""}
              helperText={nameErrText}
            />
            <TextField
              name={"phone"}
              margin={"normal"}
              label={"Số điện thoại"}
              fullWidth
              defaultValue={data.phone}
              disabled={disable}
              error={phoneErrText !== ""}
              helperText={phoneErrText}
            />
            <TextField
              name={"username"}
              margin={"normal"}
              label={"Tài khoản"}
              fullWidth
              defaultValue={data.username}
              disabled={true}
            />
            <TextField
              name={"password"}
              margin={"normal"}
              label={"Mật khẩu"}
              fullWidth
              type={"password"}
              defaultValue={data.password}
              disabled={disable}
              error={passwordErrText !== ""}
              helperText={passwordErrText}
            />
            {!disable && (
              <TextField
                name={"confirmPassword"}
                margin={"normal"}
                label={"Nhập lại Mật khẩu"}
                fullWidth
                type={"password"}
                defaultValue={data.password}
                disabled={disable}
                error={confirmPassword !== ""}
                helperText={confirmPassword}
              />
            )}
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Quyền</InputLabel>
              <Select
                disabled={disable}
                defaultValue={data.permission}
                label="Quyền hạn"
                onChange={handleChange}
              >
                <MenuItem value={0}>ADMIN</MenuItem>
                <MenuItem value={1}>NGƯỜI DÙNG</MenuItem>
                <MenuItem value={2}>NHÂN VIÊN</MenuItem>
              </Select>
            </FormControl>
            {disable ? (
              <Button
                fullWidth
                color="warning"
                variant="contained"
                onClick={() => setDisable(false)}
                sx={{ mt: 2 }}
              >
                Chỉnh sửa
              </Button>
            ) : (
              <Box display={"flex"} flexDirection={"column"} pt={2} gap={2}>
                <LoadingButton
                  fullWidth
                  color="success"
                  variant={"contained"}
                  type="submit"
                >
                  Cập nhật
                </LoadingButton>
                <Button
                  fullWidth
                  color="warning"
                  variant="contained"
                  onClick={handleClose}
                >
                  Hủy
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
