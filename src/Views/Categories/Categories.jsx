import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getAllCategories } from "./CategoryApi";

export const CategoryCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((response) => setCategories(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {" "}
      <div className='container'>
        <div className='row'>
          <div className='row justify-content-center gap-4'>
            {categories &&
              categories.map((category) => (
                <div className='card' style={{ width: "18rem" }} key={category}>
                  <div className='card-body'>
                    <h5 className='card-title'>{category}</h5>
                    <p className='card-text'>{category} category description</p>
                    <a href='#' className='btn btn-primary'>
                      Explore products
                    </a>
                  </div>
                </div>
              ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
};
