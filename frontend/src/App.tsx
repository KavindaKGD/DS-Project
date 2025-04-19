import React, { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { RestaurantDetail } from "./pages/RestaurantDetails";
import { Cart } from "./components/Cart";
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentPage("restaurant");
  };
  const handleAddToCart = (item) => {
    setCartItems([
      ...cartItems,
      {
        ...item,
        id: Date.now(),
      },
    ]);
  };
  const handleRemoveFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  const handleBackToHome = () => {
    setCurrentPage("home");
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        onBackClick={currentPage === "restaurant" ? handleBackToHome : null}
        cartCount={cartItems.length}
        onCartClick={toggleCart}
      />
      {currentPage === "home" ? (
        <Home onSelectRestaurant={handleSelectRestaurant} />
      ) : (
        <RestaurantDetail
          restaurant={selectedRestaurant}
          onAddToCart={handleAddToCart}
        />
      )}
      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={toggleCart}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
}
