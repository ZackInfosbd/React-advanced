import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;

/*
  * PropTypes allow us to validate our props we are passing into component, means that 
some of our objects have not some given properties as the rest of the objects
     1 - that's why we need to set up some props types to check that for me
     2 - set up some default values or short-ciruit operators.
*/
