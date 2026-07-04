import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { Link, Links } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown.jsx";
import Navbar from "./Navbar.jsx";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { backend_url } from "../../server.js";
import Cart from "../Cart/Cart.jsx";
import WishList from "../WishList/WishList.jsx";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/product.js";
import logo from "../../Assets/elvora-logo.jpeg";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { isSeller, seller } = useSelector((state) => state.seller);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (allProducts) {
      setData(allProducts);
    }
  }, [allProducts]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      data &&
      data.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase()),
      );
    setSearchData(filteredProducts);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`${styles.section} bg-white`}>
        <div className="hidden 800px:h-[70px] 800px:my-[10px] 800px:flex items-center justify-between">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Elvora"
                className="h-[40px] w-[200px] object-cover object-center"
              />
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product...."
              value={searchTerm}
              onChange={handleSearch}
              className="h-[40px] w-full px-2 border-[#C59B6D] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-2">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start py-3">
                          <img
                            src={`${i.images?.[0].url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}`}>
            {isSeller ? (
              <Link to="/dashboard">
                <h1 className="text-[#ffff] flex items-center">
                  {isSeller ? "Dashboard" : "Become Seller"}
                  <IoIosArrowForward className="ml-1" />
                </h1>
              </Link>
            ) : (
              <Link to="/shop-create">
                <h1 className="text-[#ffff] flex items-center">
                  Become Seller
                  <IoIosArrowForward className="ml-1" />
                </h1>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null} transition hidden 800px:flex items-center justify-between w-full bg-[#2F3A33] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/* Categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden lg:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* nav items */}
          <div className={`${styles.normalFlex}`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex gap-3">
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15]"
                onClick={() => setOpenWishList(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#E76F51] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#E76F51] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>
            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-[15]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      alt=""
                      className="w-[35px] h-[35px] rounded-full"
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/*Cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/*WishList popup */}
            {openWishList ? (
              <WishList setOpenWishList={setOpenWishList} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null} w-full h-[60px] bg-[#FFFFFF] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Elvora"
                className="h-[40px] w-[150px] object-cover object-center cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div className="relative mr-[20px] mt-3">
              <AiOutlineShoppingCart
                size={30}
                onClick={() => setOpenCart(true)}
              />
              <span className="absolute right-0 top-0 rounded-full bg-[#E76F51] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
        </div>

        {/* header sidebar */}
        {open && (
          <div className="fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0">
            <div className="fixed w-[60%] bg-[#FFFFFF] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart
                      size={30}
                      className="mt-5 ml-3"
                      onClick={() => setOpenWishList(true)}
                    />
                    <span className="absolute right-0 top-0 rounded-full bg-[#E76F51] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={25}
                  className="ml-4  mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px] relative">
                <input
                  type="text"
                  placeholder="Search Product...."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="h-[40px] w-full px-2 border-[#C59B6D] border-[2px] rounded-md"
                />
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-2">
                    {searchData &&
                      searchData.map((i, index) => {
                        return (
                          <Link to={`/product/${i._id}`}>
                            <div className="w-full flex items-start-py-3">
                              <img
                                src={`${i.images?.[0].url}`}
                                alt=""
                                className="w-[40px] h-[40px] mr-[10px]"
                              />
                              <h1>{i.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                ) : null}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-5 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#ffff] flex items-center">
                    Become Seller
                    <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      alt=""
                      className="w-[70px] h-[70px] rounded-full border-[2px] border-[#2E7D5B]"
                    />
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#1F2933]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] pr-[10px] text-[#1F2933]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Cart Popup */}
        {openCart && <Cart setOpenCart={setOpenCart} />}

        {/* Wishlist Popup */}
        {openWishList && <WishList setOpenWishList={setOpenWishList} />}
      </div>
    </>
  );
};

export default Header;
