import React, { useState } from "react";
import { ProductCard } from "./Views/Products/ProductCard";
import { NavBar } from "./Views/Home/NavBar";
import { Route, Routes } from "react-router-dom";
import { CategoryCard } from "./Views/Categories/Categories";
import { HomePage } from "./Views/Home/Home";
import { ContactUs } from "./Views/ContactUs/ContactUs";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className='App'>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route element={<HomePage />} exact path={"/"} />
        <Route
          element={<ProductCard className='col-sm' searchQuery={searchQuery} />}
          exact
          path={"/products"}
        />
        <Route element={<CategoryCard />} exact path={"/categories"} />

        <Route element={<ContactUs />} exact path={"/contact-us"} />
      </Routes>
    </div>
  );
}

export default App;
