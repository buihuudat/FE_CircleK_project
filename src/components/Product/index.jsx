import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setProductModal } from "../../redux/reducers/modalReducer";

export default function Product({
  img = "https://www.circlek.com.vn/wp-content/uploads/2019/05/Mixed-Noodles-With-Egg-and-Big-Sausage-254065.png",
  text = "title",
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setProductModal({ status: true, data: {} }));
  };
  console.log(useSelector((state) => state.modal));
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="200" image={img} alt={text} />
        <CardContent>
          <Typography
            variant="h6"
            fontWeight={500}
            color="orange"
            align="center"
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
