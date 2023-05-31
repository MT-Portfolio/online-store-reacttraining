import Axios from "axios";
import { useState } from "react";

export const getAllCategories = async () => {
    const response = await Axios.get("https://fakestoreapi.com/products/categories");
    const categories = response.data;
    return categories;
};