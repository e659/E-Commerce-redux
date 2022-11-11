import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function LoadMore() {
  const Products = useSelector((state) => state.allProducts.products);
  const Product = useSelector((state) => state.product);
  console.log(Products);
  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore ? Products.length : 4;
  return (
    <div>
      <div className="loadMore d-flex justify-content-center pt-5">
        {showMore ? (
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn btn-outline-primary"
          >
            Load less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn btn-outline-primary"
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
