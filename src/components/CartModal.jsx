import React from 'react';

const CartModal = ({ isOpen, closeModal, cart, removeFromCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" relative h-96 bg-white p-6 overflow-auto rounded-lg w-11/12 sm:w-2/3 lg:w-1/3">
      <button className="absolute top-0 right-0 mt-3 mr-3 bg-blue-500 text-white py-2 px-2 rounded w-10" onClick={closeModal} > X </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>

        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <img src={item.image} alt="" className="w-20 " />
                <span>{item.title}</span>
                <div className="flex items-center space-x-4">
                  <span>${item.price}</span>
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">Your cart is empty</p>
        )}

        
      </div>
    </div>
  );
};

export default CartModal;
