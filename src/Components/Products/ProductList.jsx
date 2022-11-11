import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SingleProduct from "./singleProduct";
import { useParams } from "react-router-dom";
import { setProducts } from "../../Redux/actions/productAction";
import { selectProduct } from "../../Redux/actions/productAction";
export default function ProductList(props) {
  const { products } = props;
  // const dispatch = useDispatch();
  // const { productId } = useParams();
  // const fetchAllProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };
  // const fetchProductDetail = async (id) => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${id}`)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });

  //   dispatch(selectProduct(response.data));
  // };
  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);
  // useEffect(() => {
  //   if (productId && productId !== "") fetchProductDetail(productId);
  // }, [productId]);
  return (
    <>
      <SingleProduct />
    </>
  );
}
