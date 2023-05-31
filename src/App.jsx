import React, { useState, useEffect } from "react";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <div>
      <nav>
        <a>
          <img
            src='https://img.freepik.com/premium-vector/supermarket-logo-template-design_23-2148469238.jpg'
            alt='Logo'
            width='60'
            height='60'
            className='d-inline-block align-text-top'
          ></img>
        </a>
        <ul>Eco Market</ul>
        <ul align='right'>
          <button type='button' className='btn btn-outline-primary'>
            Home
          </button>{" "}
          <button type='button' className='btn btn-outline-primary'>
            Products
          </button>{" "}
          <button type='button' className='btn btn-outline-primary'>
            Categories
          </button>
        </ul>
        <input
          className='Search Bar'
          type='text'
          placeholder='Looking for something?'
        ></input>
        <button className='Search Button' size={30}>
          Search
        </button>
      </nav>

      <div>
        <div className='row'>
          <div className='row justify-content-center'>
            <ProductCard className='col-sm' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
