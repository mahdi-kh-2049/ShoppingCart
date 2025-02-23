import React from 'react'
import { IProduct } from '../../types/server';
type TProductItem=IProduct
function ProductItem({title,price,description,image}:TProductItem) {
  return (
    <div className="shadow border rounded pb-2">
      <img
        className="rounded-t w-100"
        src={image}
        alt=""
      />
      <div className="flex flex-row-reverse justify-between px-4 mt-2">
        <h3 className='line-clamp-1 text-right  font-bold w-50'>{title}</h3>
        <span className='font-bold'>{price}$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right text-gray-500 ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem