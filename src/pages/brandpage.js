import React from 'react'
import Brand from '../components/Brands';
import { brand } from '../components/Brands/Data';


const brandpage = () => {
  return (
    <>
        <Brand {...brand} />
    </>
  )
}

export default brandpage;