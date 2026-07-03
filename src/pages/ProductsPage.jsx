import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { useParams, useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/product.js";
import Loader from "../components/Layout/Loader.jsx";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    await dispatch(getAllProducts());
    setLoading(false);
  };

  fetchProducts();
}, [dispatch]);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];

    if (categoryData === null) {
      const d = allProductsData.sort((a, b) => a.sold_out - b.sold_out);
      setData(d);
    } else {
      const d = allProductsData.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, [allProducts, categoryData]);

  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      {loading ? (
        <Loader />
      ) : (
        <div className={`${styles.section} h-screen`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {data &&
              data.map((i, index) => <ProductCard data={i} key={index} />)}
          </div>
          {data && data.length === 0 ? (
            <h1 className="text-center w-full pb-[110x] text-[20px]">
              No products found!
            </h1>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
