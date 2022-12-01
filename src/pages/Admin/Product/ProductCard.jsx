import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import productApi from "../../../api/productApi";
import Noti from "../../../components/common/Toast";
import { setEditProductModal } from "../../../redux/reducers/modalReducer";

const ProductCard = ({ product, admin = 1 }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await productApi.delete(product.id);
      setLoading(true);
      Noti("success", "Đã xóa thành công");
    } catch (error) {
      Noti("error", "Xóa thất bại", error.data);
    }
  };

  return (
    <Box>
      <Card
        sx={{
          width: 255,
          height: 350,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: 58,
              overflowWrap: "break-word",
            }}
          >
            {product.description}
          </Typography>
        </CardContent>
        {admin === 0 && (
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              backdropFilter: "blur(3px)",
              marginTop: "auto",
            }}
          >
            <LoadingButton
              variant="contained"
              color="error"
              size="small"
              onClick={handleDelete}
              loading={loading}
              sx={{ width: "30%" }}
            >
              Delete
            </LoadingButton>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ width: "30%" }}
              onClick={() =>
                dispatch(setEditProductModal({ status: true, data: product }))
              }
            >
              Edit
            </Button>
          </CardActions>
        )}
      </Card>
    </Box>
  );
};

export default ProductCard;
