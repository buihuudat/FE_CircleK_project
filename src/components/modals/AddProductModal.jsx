import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddProducerModal,
  setAddProductModal,
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
import { productType } from "../../access/dataType/TypeProducts";
import { dnrUri } from "../../api/axiosClient";
import { imageUpload } from "../common/uploadImage";
import { setLoadingR } from "../../redux/reducers/loadingReducer";

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
  const [nameErr, setNameErr] = useState("");
  const [descErr, setDesErr] = useState("");
  const [countErr, setCountErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  const [hsxErr, setHsxErr] = useState("");
  const [hsdErr, setHsdErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState("");
  const [value, setValue] = useState(0);
  const [kieu, setKieu] = useState("");
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("");
  const [producers, setProducers] = useState([]);

  const open = useSelector((state) => state.modal.product);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getType = () => {
      productType.map((e) => {
        if (e.type === kieu) {
          setTypes(e.data);
        }
      });
    };

    getType();
  }, [kieu]);

  React.useEffect(() => {
    const getProducts = async () => {
      const products = await productApi.getAllProducts();
      setProducts(products);
    };
    getProducts();

    const getProducrs = async () => {
      const producers = await producerApi.getAll();
      setProducers(producers);
    };
    getProducrs();
  }, []);

  const handleClose = () => {
    dispatch(setAddProductModal(false));
    setLoading(false);
  };

  const handleSelectImage = async (e) => {
    const img = await imageUpload(e.base64);
    setImage(img);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeKieu = (e) => {
    setKieu(e.target.value);
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      producerId: value,
      image,
      count: formData.get("count"),
      price: formData.get("price"),
      type: `${kieu}/${type}`,
      hsx: formData.get("hsx"),
      hsd: formData.get("hsd"),
    };
    let err = false;
    if (data.name === "") {
      setNameErr("B???n ch??a nh???p t??n");
      err = true;
    }
    if (data.description === "") {
      setNameErr("H??y nh???p th??ng tin s???n ph???m");
      err = true;
    }
    if (Number(data.count) === 0) {
      setCountErr("S??? l?????ng kh??ng h???p l???");
      err = true;
    }
    if (Number(data.price) === 0) {
      setPriceErr("Gi?? ti???n kh??ng h???p l???");
      err = true;
    }
    if (data.image === "") {
      Noti("error", "Vui l??ng ch???n ???nh cho s???n ph???m");
      err = true;
    }
    if (data.hsd === data.hsx) {
      setHsdErr("H???n s??? d???ng kh??ng h???p l???");
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
      await productApi.getAllProducts();
      Noti("success", "???? th??m th??nh c??ng ", product.name);
      setLoading(false);
      dispatch(setAddProductModal(false));
    } catch (error) {
      setLoading(false);
      Noti("error", error.data);
    }
  };

  const handleAddProducers = () => {
    dispatch(setLoadingR(true));
    dispatch(setAddProducerModal(true));
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
            Th??m s???n ph???m m???i
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            {image === "" ? (
              <Typography>Ch???n 1 ???nh</Typography>
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
              label="T??n s???n ph???m"
              margin="normal"
              name="name"
              error={nameErr !== ""}
              helperText={nameErr}
              fullWidth
              required
            />
            <TextField
              label="Th??ng tin s???n ph???m"
              margin="normal"
              name="description"
              error={descErr !== ""}
              helperText={descErr}
              fullWidth
              required
            />
            <FormControl sx={{ width: "45%", mr: "5%" }} margin="normal">
              <InputLabel id="demo-simple-select-label">Ki???u</InputLabel>
              <Select value={kieu} label="Ki???u" onChange={handleChangeKieu}>
                {productType.map((e, i) => (
                  <MenuItem key={i} value={e.type}>
                    {e.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              sx={{ width: "45%", ml: "5%" }}
              margin="normal"
              error={type === ""}
            >
              <InputLabel id="demo-simple-select-label">Lo???i</InputLabel>
              <Select value={type} label="Lo???i" onChange={handleChangeType}>
                {types?.map((e, i) => (
                  <MenuItem key={i} value={e.type}>
                    {e.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <FormControl sx={{ width: "80%" }} margin="normal">
                <InputLabel id="demo-simple-select-label">
                  Nh?? s???n xu???t
                </InputLabel>
                <Select
                  value={value}
                  label="Nh?? s???n xu???t"
                  onChange={handleChange}
                >
                  {producers.map((producer, i) => (
                    <MenuItem key={producer.id} value={producer.id}>
                      {producer.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                sx={{ width: "15%", fontWeight: "600" }}
                onClick={handleAddProducers}
              >
                ADD
              </Button>
            </Box>
            <TextField
              label="S??? l?????ng"
              margin="normal"
              name="count"
              type="number"
              required
              error={countErr !== ""}
              helperText={countErr}
              sx={{ width: "45%", mr: "5%" }}
            />
            <TextField
              label="Gi??"
              margin="normal"
              name="price"
              type={"number"}
              required
              error={priceErr !== ""}
              helperText={priceErr}
              sx={{ width: "45%", ml: "5%" }}
            />
            <TextField
              label="Ng??y s???n xu???t"
              margin="normal"
              name="hsx"
              error={hsxErr !== ""}
              helperText={hsxErr}
              sx={{ width: "45%", mr: "5%" }}
              type={"date"}
              defaultValue={moment(new Date()).format("yyyy-MM-DD")}
            />
            <TextField
              label="H???n s??? d???ng"
              margin="normal"
              name="hsd"
              type={"date"}
              error={hsdErr !== ""}
              defaultValue={moment(new Date()).format("yyyy-MM-DD")}
              sx={{ width: "45%", ml: "5%" }}
            />
            <Box>
              <LoadingButton
                sx={{ mt: 2 }}
                variant="contained"
                color="success"
                fullWidth
                type={"submit"}
                loading={loading}
              >
                Th??m
              </LoadingButton>
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="warning"
                fullWidth
                onClick={handleClose}
              >
                H???y
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
