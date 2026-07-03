import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxCross1, RxDashboard } from "react-icons/rx";
import {VscNewFile} from "react-icons/vsc";
import {CiMoneyBill, CiSettings} from "react-icons/ci"
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-full h-[89vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      
      <div className="w-full items-center p-2">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 1 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full items-center p-2">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className="w-full items-center p-2">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage
            size={30}
            color={`${active === 3 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className="w-full items-center p-2">
        <Link to="/dashboard-create-product" className="w-full flex items-center">
          <AiOutlineFolderAdd
            size={30}
            color={`${active === 4 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 4 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            Create Product
          </h5>
        </Link>
      </div>

      <div className="w-full items-center p-2">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 5 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            All events
          </h5>
        </Link>
      </div>
      
      <div className="w-full items-center p-2">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile
            size={30}
            color={`${active === 6 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 6 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            Create event
          </h5>
        </Link>
      </div>
      
      <div className="w-full items-center p-2">
        <Link to="/dashboard-withdraw-money" className="w-full flex items-center">
          <CiMoneyBill
            size={30}
            color={`${active === 7 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 7 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            Withdraw money
          </h5>
        </Link>
      </div>
      
      <div className="w-full items-center p-2">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiMessageSquareDetail
            size={30}
            color={`${active === 8 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 8 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>
      
      <div className="w-full items-center p-2">
        <Link to="/dashboard-coupouns" className="w-full flex items-center">
          <AiOutlineGift
            size={30}
            color={`${active === 9 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 9 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>
      
      <div className="w-full items-center p-2">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={30}
            color={`${active === 10 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 10 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            Refunds
          </h5>
        </Link>
      </div>
     
      <div className="w-full items-center p-2">
        <Link to="/settings" className="w-full flex items-center">
          <CiSettings
            size={30}
            color={`${active === 11 ? "#E76F51" : "#6B7280"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 11 ? "text-[#E76F51]" : "text-[#6B7280]"}`}
          >
            Settings
          </h5>
        </Link>
      </div>
      
    </div>
  );
};

export default DashboardSideBar;
