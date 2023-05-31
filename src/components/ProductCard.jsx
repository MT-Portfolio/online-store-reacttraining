import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getAllProducts } from "./ProductsApi";

export const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  const buyAlert = () => {
    alert("Item has been added to cart");
  };

  return (
    <>
      {products?.map((product) => {
        return (
          <div className='card' style={{ width: 18 + "rem" }} key={product?.id}>
            <img src={product?.image} className='card-img-top' alt='...'></img>
            <div className='card-body'>
              <h5 className='card-title'>{product?.title}</h5>
              <p className='card-text'>{product?.description}</p>
              <a href='#' className='btn btn-primary' onClick={buyAlert}>
                Buy now
              </a>{" "}
              <button href='#' className='btn btn-outline-primary' disabled>
                $ {product?.price}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
