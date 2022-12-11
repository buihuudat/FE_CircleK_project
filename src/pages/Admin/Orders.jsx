import React from "react";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import orderApi from "../../api/orderApi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { currentFormat } from "../../components/common/FormatCurrency";
import _ from "lodash";

const Product = ({ products, phone, orders }) => {
  const sumPrice = () => _.sumBy(products.products, (e) => Number(e.price));

  const handleAccept = async (e) => {
    const order = await orderApi.updateOrder({
      id: orders._id,
      cartId: products._id,
    });

    console.log(products);
  };

  const handleCancel = () => {};

  return (
    <Box>
      <Paper xs={{ width: "max-content" }}>
        {products.products.map((data, i) => (
          <Box
            key={i}
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={2}
            p={3}
            m={1}
            width={300}
          >
            <Avatar
              src={data.image}
              alt={data.name}
              sx={{ width: 80, height: 80 }}
            />
            <Box display="flex" flexDirection={"column"}>
              <Typography variant="h6" fontWeight={500}>
                {data.name}
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent={"space-between"}
                gap={4}
              >
                <Typography variant="h6">{data.count}</Typography>
                <Typography variant="h6" color="orange" align="right">
                  {currentFormat(data.price)}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}

        <Box display="flex" flexDirection={"column"}>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Typography variant="h5" fontWeight="600">
              Tổng số tiền
            </Typography>
            <Typography variant="h4" fontWeight={500} color="orange">
              {currentFormat(sumPrice())}
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={"column"}
          gap={2}
          onClick={handleAccept}
        >
          <Button variant="contained" fullWidth color="success" onClic>
            Xác nhận đơn hàng
          </Button>
          <Button
            variant="contained"
            fullWidth
            color="error"
            onClick={handleCancel}
          >
            Hủy đơn hàng
          </Button>
          <Button
            href={`tel:${phone}`}
            variant="outlined"
            fullWidth
            color="secondary"
          >
            Liên hệ với người mua
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const userOder = await orderApi.getOrders();
      setOrders(userOder);
    };
    getOrders();
  }, []);

  console.log(orders.data);

  return (
    orders.data && (
      <Box display="flex" flexDirection={"row"} gap={2} p={3}>
        {orders.data[0].cart.map((product, i) => (
          <Product
            products={product}
            phone={orders.data[0].phone}
            orders={orders.data[0]}
            key={i}
          />
        ))}
      </Box>
    )
  );
};

export default Order;
