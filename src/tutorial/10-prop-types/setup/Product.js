import React from 'react';
import PropTypes from "prop-types"
import defaultImage from '../../../assets/default-image.jpeg' 

const Product = ({image,name,price}) => {
  const url = image && image.url 
  console.log(image,name,price);
  return <article className='product'>
    {/* cause an error because one of the object does not have img proprety */}
    <img src={url || defaultImage} alt={name || 'default name'} />
    {/* <img src={image.url} alt={name} /> */}
    <h4>{name} </h4>
    <p>${price || 3.99}</p>
    {/* check which product has no image property */}
    {/* <h4>single product</h4> */}
    
  </article>;
};

// set up propTypes from the package PropTypes.
Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}

// set up default value/props from the package prop-types
Product.defaultProps = {
  name:'default name',
  // price:3.99,
  image: defaultImage
}
export default Product;
