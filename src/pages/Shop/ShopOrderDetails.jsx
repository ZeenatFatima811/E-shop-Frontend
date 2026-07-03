import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import Footer from "../../components/Layout/Footer";
import OrderDetails from "../../components/Shop/OrderDetails.jsx"

const ShopOrderDetails = () => {
  return (
    <div>
      <DashboardHeader />
      <OrderDetails/>
      <Footer/>
    </div>
  );
};

export default ShopOrderDetails;
