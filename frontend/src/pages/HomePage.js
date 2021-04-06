import React from "react";
import Product from "../components/Product";
import { products } from "../data/product";

const HomePage = () => {
  return (
    <>
      <div className="container md:flex justify-between flex-wrap mx-auto">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
