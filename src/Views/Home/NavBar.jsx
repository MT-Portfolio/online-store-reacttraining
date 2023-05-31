import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { getAllProducts } from "../Products/ProductsApi";
import { useNavigate } from "react-router-dom";

export function NavBar({ onSearch }) {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(value);
    setValue("");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className='d-flex justify-content-between'>
      <section id='s1'>
        <img
          src='https://img.freepik.com/premium-vector/supermarket-logo-template-design_23-2148469238.jpg'
          alt='Logo'
          width='60'
          height='60'
          className='d-inline-block align-text-top'
        />
      </section>
      <section id='s2' align-text='center' className='p-3'>
        <h6 className='text'>Eco Market</h6>
      </section>
      <section id='s3' align='right' className='p-2'>
        <button
          type='button'
          className='btn btn-outline-primary d-none d-md-inline'
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          type='button'
          className='btn btn-outline-primary d-none d-md-inline'
          onClick={() => navigate("/products")}
        >
          Products
        </button>
        <button
          type='button'
          className='btn btn-outline-primary d-none d-md-inline'
          onClick={() => navigate("/categories")}
        >
          Categories
        </button>

        <button
          type='button'
          className='btn btn-outline-primary d-none d-md-inline'
          onClick={() => navigate("/contact-us")}
        >
          ContactUs
        </button>
      </section>
      <section id='s4' className='p-3'>
        <input
          id='searchInput'
          className='Search Bar d-none d-md-inline'
          type='text'
          placeholder='Looking for something?'
          value={value}
          onChange={onChange}
        />
        <button
          className='Search Button d-none d-md-inline'
          size={30}
          onClick={handleSearch}
        >
          Search
        </button>
        <div className='dropdown'></div>
      </section>
      <section>
        <div className='d-md-none'>
          <GiHamburgerMenu size='30px' onClick={toggleMenu} />
          {showMenu && (
            <div className='menu-items' onClick={closeMenu}>
              <nav className='nav flex-column'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
                <a className='nav-link' href='#'>
                  Product
                </a>
                <a className='nav-link' href='#'>
                  Categories
                </a>
              </nav>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
}
