import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setCartModal, setPayModal } from "../../redux/reducers/modalReducer";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import _ from "lodash";
import { currentFormat } from "../common/FormatCurrency";
import { useState } from "react";
import Noti from "../../components/common/Toast";
import { setAddCart } from "../../redux/reducers/productReducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  minWidth: "400px",
  borderRadius: "10px",
  p: 4,
};

export default function PayModal() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.pay);
  const user = useSelector((state) => state.user.data);

  const products = useSelector((state) => state.products.addCart);

  const handleClose = () => {
    dispatch(setPayModal(false));
  };

  const handlePay = () => {
    dispatch(setPayModal(false));
    Noti("success", "Đặt hàng thành công");
    dispatch(setAddCart([]));
  };

  const CartItem = ({ product }) => {
    const [productCount, setProductCount] = useState(product.prdCount);
    const handleRemove = () => {
      let count = product.prdCount;
      count = count - 1;
      product = {
        ...product,
        prdCount: count <= 0 ? 0 : count,
      };

      setProductCount(productCount - 1);

      // don't yet
      if (product.prdCount === 0) {
        _.remove(products, (e) => e.id === product.id);
      }
    };

    const handleAdd = () => {
      product = {
        ...product,
        prdCount: product.prdCount + 1,
      };
      setProductCount(productCount + 1);
    };

    return (
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          p: 2,
        }}
      >
        <img
          style={{ width: "60px", height: "50px" }}
          src={product.image}
          alt={product.name}
        />
        <Box display={"flex"} flexDirection="column" justifyContent={"start"}>
          <Typography fontWeight={600} variant="h5">
            {product.name}
          </Typography>
          <Typography
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            overflow="hidden"
            width={"400px"}
            sx={{ textOverflow: "ellipsis" }}
          >
            {product.description}
          </Typography>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-around"}
            alignItems="center"
          >
            <Box display={"flex"} flexDirection="row" alignItems={"center"}>
              <IconButton onClick={handleRemove}>
                <RemoveIcon />
              </IconButton>
              <Typography>{productCount}</Typography>
              <IconButton onClick={handleAdd}>
                <AddIcon />
              </IconButton>
            </Box>
            <Typography variant="h5" color="orange">
              {currentFormat(productCount * product.price)}
            </Typography>
          </Box>
        </Box>
        <Box></Box>
      </Paper>
    );
  };

  const sumPrice = () => _.sumBy(products, (e) => e.price * e.prdCount);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center" fontWeight={600} variant="h4">
            Thanh toán
          </Typography>
          {products.length > 0 ? (
            <Box
              display={"flex"}
              maxHeight={600}
              overflow="auto"
              flexDirection="column"
              gap={2}
              pt={3}
            >
              {products.map((product, i) => (
                <CartItem key={i} product={product} />
              ))}
            </Box>
          ) : (
            <Typography align="center" pt={2}>
              Chưa có sản phẩm
            </Typography>
          )}

          <Box pt={3}>
            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent="space-between"
              gap={4}
            >
              <TextField label="Nhập mã giảm giá" fullWidth />
              <Button variant="contained" fullWidth>
                Áp dụng
              </Button>
            </Box>
            <TextField
              defaultValue={user.address}
              fullWidth
              disabled
              label="Địa chỉ"
              margin="normal"
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            p={4}
            alignItems="center"
          >
            <Typography fontWeight={600} variant="h4">
              Tổng thanh toán
            </Typography>
            <Typography variant="h4" color="orange">
              {currentFormat(sumPrice())}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent={"center"}
            pt={4}
            gap={4}
          >
            <Button
              fullWidth
              color="warning"
              variant="contained"
              onClick={handleClose}
            >
              Mua thêm
            </Button>
            {products.length > 0 && (
              <Button
                color="success"
                variant="contained"
                fullWidth
                onClick={handlePay}
              >
                Thanh toán
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
