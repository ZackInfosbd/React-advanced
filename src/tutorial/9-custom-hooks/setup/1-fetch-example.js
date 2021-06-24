import  React from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const {loading,products} = useFetch(url);

  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example

/*
	* Custom hooks allow us to reuse the functionality, wether fetching data 
  or saving to local storage..etc.
  * building a custom hook need to be with useHook on the level of its name
  while exporting it.
*/