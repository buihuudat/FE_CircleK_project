import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import userApi from "../../api/userApi";
import { setUser } from "../../redux/reducers/userReducer";
import { setLoadingR } from "../../redux/reducers/loadingReducer";
const AuthLayout = () => {
  const [loading, setLoading] = useState(false);
  const UID = localStorage.getItem("UID");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const checkUser = async () => {
      dispatch(setLoadingR(true));
      if (UID) {
        const user = await userApi.getUser(UID);
        dispatch(setUser(user));
        setLoading(true);
        dispatch(setLoadingR(false));
      }
    };
    checkUser();
  }, [navigate, dispatch, UID]);
  return loading && <Outlet />;
};

export default AuthLayout;
