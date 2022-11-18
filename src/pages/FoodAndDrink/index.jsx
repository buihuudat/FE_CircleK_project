import { Box, Typography } from "@mui/material";
import React from "react";
import banner from "../../access/imgs/banner.jpg";
import Tabsbar from "../../components/Tabs";
const FoodDrink = () => {
  return (
    <Box>
      <Box
        sx={{
          background: `url(${banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <Box color="white" pt={10} pl={40}>
          <Typography variant="h3" fontWeight={600}>
            NHANH VÀ NGON
          </Typography>
          <Typography variant="h5" width={"600px"}>
            Thực đơn đa dạng luôn sẵn sàng mang đến cho bạn nhiều sự lựa chọn
            hấp dẫn vào bất cứ thời điểm nào trong ngày.
          </Typography>
        </Box>
      </Box>
      <Tabsbar />
    </Box>
  );
};

export default FoodDrink;
