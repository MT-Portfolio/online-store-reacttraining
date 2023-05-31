import Axios from "axios";
import { useState } from "react";

export const getAllProducts = async () => {
    const response = await Axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    return products;
};