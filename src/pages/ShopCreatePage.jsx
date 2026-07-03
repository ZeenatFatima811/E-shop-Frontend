import React from "react";
import ShopCreate from "../components/Shop/ShopCreate.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const ShopCreatePage = () => {
  const { isSeller, seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller._id}`);
    }
  }, [isSeller, seller]);

  return (
    <div>
      <ShopCreate />
    </div>
  );
};

export default ShopCreatePage;
