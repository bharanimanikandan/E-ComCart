import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };
    getProducts();
  }, []);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-cyan-300 via-stone-300 to-blue-400">
      <Navbar cartCount={cart.length} openCart={openCart} />
      <CartModal
        isOpen={isCartOpen}
        closeModal={closeCart}
        cart={cart}
        removeFromCart={removeFromCart}
      />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
