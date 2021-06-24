import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const calculateMostExpensive = (data) => {
  console.log('hello');
  return data.reduce((total,item)=> {
    const price = item.fields.price 
    if(price>=total){
      total = price
    }
    return total
  },0) / 100
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart,setCart] = useState(0)

  const addToCart = useCallback(()=> {
    console.log(cart);
    setCart(cart + 1)
  },[cart])

  const mostExpensive = useMemo(()=>calculateMostExpensive(products),[products])

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{marginTop:"3rem"}}>cart: {cart}</h1>
      <h1>Most expensive: ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}

const BigList = ({ products, addToCart }) => {
  useEffect(()=> {
    console.log('Big List called');
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
}

const SingleProduct = React.memo(({ fields,addToCart }) => {
  useEffect(()=> {
    console.count('Single Product called');
  })
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
})
export default Index

// React Method React.memo - be looking for the props
/*
  * using React.memo method in case we want to check the rendered values stored
  in the useState value, and as we know that useState Hook:
    - preserve the values between the re-renders: 
    - trigger the render
  so in the presebce of the React.memo, it will keep checking..it is
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