import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>

      <BigList products={products} />
    </>
  );
};

const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.log("big List called");
  }, []);
  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </section>
  );
});

const SingleProduct = ({ fields }) => {
  useEffect(() => {
    console.count("single item called");
  }, []);
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
export default Index;

// React Method React.memo - be looking for the props
/*
  * using React.memo method in case we want to check the rendered values stored
  in the useState value, and as we know that useState Hook:
    - preserve the values between the re-renders: 
    - trigger the render
  so in the presence of the React.memo, it will keep checking..it is
  memoising, well it will check for us props values, if they changed or not
  if not then will not triggering the renders, as we said each time the props
  is changed then the component re-renders. */

// useCallback Hook
/*
  * do almost the same like React.memo method,except this time we are about
  achieving it with a Hook.
  * to avoid re-creating the function from the scratch while re-rendering 
  we just invoke the hook useCallback on the function/props or state. 

*/

// useMemo Hook - specifically for the value
/*
  * we said we use with values, but How?
  well we could use it for example with any value in our example we did use it 
  with the returned value from a complicated function that takes a bit time
  to calculate, the idea behind that is to not execute the function each time
  we render the component but to memorize it somehow.
*/
