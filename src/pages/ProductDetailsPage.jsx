import React, { useEffect } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails.jsx";
import { useParams, useSearchParams } from "react-router-dom";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/actions/product";
import { getAllEvents } from "../redux/actions/event";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isEvent = searchParams.get("isEvent") === "true";

  const { singleProduct } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);

  const data = isEvent
    ? allEvents?.find((event) => event._id === id)
    : singleProduct;

  useEffect(() => {
    if (isEvent) {
      dispatch(getAllEvents());
    } else {
      dispatch(getSingleProduct(id));
    }
  }, [dispatch, id, isEvent]);

  return (
    <div>
      <Header />

      <ProductDetails data={data} isEvent={isEvent} />

      {!isEvent && singleProduct && <SuggestedProduct data={singleProduct} />}

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
