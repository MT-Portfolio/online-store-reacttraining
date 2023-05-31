import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getAllProducts } from "./ProductsApi";

export const ProductCard = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  const buyAlert = () => {
    alert("Item has been added to cart");
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='row justify-content-center gap-4'>
            {products &&
              products
                .filter((product) =>
                  product.title
                    .toLowerCase()
                    .includes(searchQuery?.toLowerCase() || "")
                )
                .map((product) => (
                  <div
                    className='card'
                    style={{ width: "18rem" }}
                    key={product?.id}
                  >
                    <img
                      src={product?.image}
                      className='card-img-top'
                      alt='...'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{product?.title}</h5>
                      <p className='card-text'>{product?.description}</p>
                      <a
                        href='#'
                        className='btn btn-primary'
                        onClick={buyAlert}
                      >
                        Buy now
                      </a>
                      <button
                        href='#'
                        className='btn btn-outline-primary'
                        disabled
                      >
                        $ {product?.price}
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};
