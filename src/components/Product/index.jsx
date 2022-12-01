import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { setShowProdctModal } from "../../redux/reducers/modalReducer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Noti from "../../components/common/Toast";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setShowProdctModal({ status: true, data: { product } }));
  };
  const handleAddProduct = () => {
    Noti("success", "Đã thêm thành công. \n Nói chứ, phần này chưa làm xong");
  };
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" fontWeight={500} align="center">
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="contained" fullWidth onClick={handleAddProduct}>
        <AddShoppingCartIcon />
      </Button>
    </Card>
  );
}
