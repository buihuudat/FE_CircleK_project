import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import banner from "../../access/imgs/banner.jpg";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <Box>
      {/* banner */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "500px",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>

      {/* title layout 1 */}
      <Box>
        <Typography
          color={"red"}
          variant={"h4"}
          fontWeight={600}
          align={"center"}
          mt={5}
        >
          GIẢI CƠN KHÁT, THỎA CƠN ĐÓI
        </Typography>
        <Typography align="center">
          Hãy đến ngay cửa hàng Circle K gần nhất để có những trải nghiệm thú vị
          với chúng tôi.
        </Typography>
      </Box>

      {/* layout 1 */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Box
          sx={{
            background: `url(${"https://www.circlek.com.vn/wp-content/uploads/2021/10/Thức-ăn_468wx468h.jpg"})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "450px",
            height: "450px",
            p: 3,
          }}
        >
          <Typography color="white" mt={10} mb={4}>
            Với cam kết "Tươi và Ngon" cùng các lựa chọn phong phú từ món ăn
            quốc tế quen thuộc đến món ăn địa phương và thức ăn đường phố phổ
            biến, Circle K luôn mang đến cho bạn sự hài lòng như mong muốn.
          </Typography>
          <Button variant={"contained"}>Xem tất cả</Button>
        </Box>
        <Box
          sx={{
            background: `url(${"https://www.circlek.com.vn/wp-content/uploads/2021/10/BG_320x350.png"})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "450px",
            height: "450px",
            p: 3,
          }}
        >
          <Typography color="white" mt={10} mb={4}>
            Với cam kết "Tươi và Ngon" cùng các lựa chọn phong phú từ món ăn
            quốc tế quen thuộc đến món ăn địa phương và thức ăn đường phố phổ
            biến, Circle K luôn mang đến cho bạn sự hài lòng như mong muốn.
          </Typography>
          <Button variant={"contained"} color={"warning"}>
            Xem tất cả
          </Button>
        </Box>
      </Box>

      {/* layout 2 */}
      <Box background="#f4f4f4" width={"100%"} height={"max-content"} p={10}>
        <Typography
          variant="h4"
          fontWeight={600}
          color={"red"}
          align="center"
          pt={4}
          pb={5}
        >
          KHÁM PHÁ THÊM
        </Typography>
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"center"}
          gap={2}
        >
          <Box
            sx={{
              background: `url(${"https://www.circlek.com.vn/wp-content/uploads/2016/04/Uu_dai_468x242.png"})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "450px",
              height: "200px",
              p: 3,
            }}
          >
            <Typography color="white" variant={"h5"} fontWeight={600}>
              ƯU ĐÃI
            </Typography>
            <Typography color="white" pb={1}>
              Circle K luôn mang đến cho những chương trình ưu đãi mới, đặc
              biệt, hấp dẫn và thú vị,từ các Chương Trình Khuyến Mãi Tháng, Giá
              Rẻ Mỗi Ngày đến các combo ăn uống mà bạn không thể bỏ qua.
            </Typography>
            <Button variant="outlined" color={"primary"}>
              Khám Phá thêm
            </Button>
          </Box>
          <Box
            sx={{
              background: `url(${"https://www.circlek.com.vn/wp-content/uploads/2015/11/Service-box1.jpg"})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "450px",
              height: "200px",
              p: 3,
            }}
          >
            <Typography color="white" variant={"h5"} fontWeight={600}>
              SẢN PHẨM & DỊCH VỤ
            </Typography>
            <Typography color="white" pt={1} pb={1}>
              Cảm nhận sự tiện lợi và chất lượng về dịch vụ. Trải nghiệm sự
              phong phú về sản phẩm và dịch vụ khi mua sắm tại Circle K.
            </Typography>
            <Button variant="outlined" color={"primary"} mt={1}>
              Khám Phá thêm
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
