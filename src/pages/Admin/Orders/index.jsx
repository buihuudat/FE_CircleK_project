import React from "react";
import { Box } from "@mui/material";
import { useEffect } from "react";
import orderApi from "../../../api/orderApi";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingR } from "../../../redux/reducers/loadingReducer";
import { setOrderReducer } from "../../../redux/reducers/orderReducer";
import Product from "./Product";

const Order = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.order.data);

  useEffect(() => {
    dispatch(setLoadingR(true));
    const getOrders = async () => {
      const userOrder = await orderApi.getOrders();
      _.map(userOrder.data, "cart").map((e) =>
        dispatch(
          setOrderReducer(
            e.map(
              (v) =>
                (v = {
                  ...v,
                  UID: _.find(userOrder.data, e.id).UID,
                  prdID: _.find(userOrder.data, e.id)._id,
                  phone: _.find(userOrder.data, e.id).phone,
                })
            )
          )
        )
      );
    };
    dispatch(setLoadingR(false));
    dispatch(setOrderReducer(products));
    getOrders();
  }, [dispatch]);

  return (
    products && (
      <Box display="flex" flexDirection={"row"} gap={2} p={3} flexWrap="wrap">
        {products?.map((product, i) => (
          <Product products={product} key={i} />
        ))}
      </Box>
    )
  );
};

export default Order;
