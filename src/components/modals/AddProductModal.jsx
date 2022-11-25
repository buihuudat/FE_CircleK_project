import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddProductModal,
  setProductModal,
} from "../../redux/reducers/modalReducer";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import moment from "moment";
import producerApi from "../../api/producerApi";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FileBase64 from "react-file-base64";
import { LoadingButton } from "@mui/lab";
import Noti from "../common/Toast";
import productApi from "../../api/productApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function AddProductModal() {
  const timeNow = new Date();
  const [nameErr, setNameErr] = useState("");
  const [descErr, setDesErr] = useState("");
  const [countErr, setCountErr] = useState(0);
  const [priceErr, setPriceErr] = useState(0);
  const [hsxErr, setHsxErr] = useState("");
  const [hsdErr, setHsdErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [producers, setProducers] = useState([]);
  const [image, setImage] = useState("");
  const [value, setValue] = useState(0);

  const open = useSelector((state) => state.modal.product);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getProduccers = async () => {
      const producers = await producerApi.getAllProducers();
      setProducers(producers);
    };
    getProduccers();
  }, []);

  const handleClose = () => {
    dispatch(setProductModal(false));
    setLoading(false);
  };

  const handleSelectImage = (e) => {
    setImage(e.base64);
  };

  const handleChange = (event) => {
    setValue(event);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      producer: value,
      image,
      count: formData.get("count"),
      price: formData.get("price"),
      hsx: formData.get("hsx"),
      hsd: formData.get("hsd"),
    };

    let err = false;
    if (data.name === "") {
      setNameErr("Bạn chưa nhập tên");
      err = true;
    }
    if (data.description === "") {
      setNameErr("Hãy nhập thông tin sản phẩm");
      err = true;
    }
    if (data.count === 0) {
      setCountErr("Bạn chưa nhập số lượng");
      err = true;
    }
    if (data.price === 0) {
      setPriceErr("Bạn chưa nhập giá tiền");
      err = true;
    }
    if (data.image === "") {
      Noti("error", "Vui lòng chọn ảnh cho sản phẩm");
      err = true;
    }
    if (data.hsd === data.hsx) {
      setHsdErr("Hạn sử dụng không hợp lệ");
      err = true;
    }
    if (err) return;

    setNameErr("");
    setDesErr("");
    setHsdErr("");
    setImage("");
    setCountErr(0);
    setPriceErr(0);

    setLoading(true);

    try {
      const product = await productApi.create(data);
      Noti("success", "Đã thêm thành công ", product.name);
      setLoading(false);
      dispatch(setAddProductModal(false));
    } catch (error) {
      setLoading(false);
      Noti("error", error.data);
    }
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
          <Typography align="center" fontWeight={600} variant="h5">
            Thêm sản phẩm mới
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            {image === "" ? (
              <Typography>Chọn 1 ảnh</Typography>
            ) : (
              <img
                src={image}
                alt="image"
                style={{
                  width: 400,
                  height: 200,
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              />
            )}
            <FileBase64 multiple={false} onDone={handleSelectImage} />
            <TextField
              label="Tên sản phẩm"
              margin="normal"
              name="name"
              error={nameErr !== ""}
              helperText={nameErr}
              fullWidth
            />
            <TextField
              label="Thông tin sản phẩm"
              margin="normal"
              name="description"
              error={descErr !== ""}
              helperText={descErr}
              fullWidth
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="demo-simple-select-label">
                Nhà sản xuất
              </InputLabel>
              <Select
                value={value}
                label="Nhà sản xuất"
                onChange={handleChange}
              >
                {producers.map((producer, i) => (
                  <MenuItem key={i} value={i}>
                    Twenty
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Số lượng"
              margin="normal"
              name="count"
              type="number"
              error={countErr !== 0}
              helperText={countErr !== 0}
              sx={{ width: "50%" }}
            />
            <TextField
              label="Giá"
              margin="normal"
              name="price"
              type={"number"}
              error={priceErr !== 0}
              helperText={priceErr !== 0}
              sx={{ width: "50%" }}
            />
            <TextField
              label="Ngày sản xuất"
              margin="normal"
              name="hsx"
              error={hsxErr !== ""}
              helperText={hsxErr}
              sx={{ width: "50%" }}
              type={"date"}
              defaultValue={moment(new Date()).format("yyyy-MM-DD")}
            />
            <TextField
              label="Hạn sử dụng"
              margin="normal"
              name="hsd"
              type={"date"}
              error={hsdErr !== ""}
              defaultValue={moment(new Date()).format("yyyy-MM-DD")}
              sx={{ width: "50%" }}
            />
            <Box>
              <Button
                sx={{ mt: 1 }}
                variant="contained"
                color="warning"
                fullWidth
                onClick={handleClose}
              >
                Hủy
              </Button>
              <LoadingButton
                sx={{ mt: 2 }}
                variant="contained"
                color="success"
                fullWidth
                type={"submit"}
                loading={loading}
              >
                Thêm
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
