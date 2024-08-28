import React, { useState } from 'react';
import GameList from '../components/GameList';
import Cart from '../components/Cart';
import './Store.css';

const Store = () => {
  const [games] = useState([
    { id: 1, title: 'Game 1', price: 29.99, image: 'url-game-1.jpg' },
    { id: 2, title: 'Game 2', price: 39.99, image: 'url-game-2.jpg' },
    { id: 3, title: 'Game 3', price: 49.99, image: 'url-game-3.jpg' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (game) => {
    setCartItems([...cartItems, game]);
  };

  const removeFromCart = (gameToRemove) => {
    setCartItems(cartItems.filter(game => game !== gameToRemove));
  };

  return (
    <div className="store">
      <header className="store-header">
        <h1>Epic Games Store</h1>
      </header>
      <div className="store-content">
        <GameList games={games} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default Store;
