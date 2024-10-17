import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="border-2 p-4  rounded-lg shadow">
        <img src={product.image} alt="" className="w-full h-40 object-cover mb-4 rounded-md" />
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-white border inline-block px-1 bg-slate-700">Price: ${product.price}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold border-2" onClick={() => addToCart(product)}> Add to Cart </button>
      </div>
    );
};

export default ProductCard;