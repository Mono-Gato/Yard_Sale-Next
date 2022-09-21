import { useState } from 'react';

const initialState = {
  cart: [],
};

function useInitialState() {
  const [state, setState] = useState(initialState);

  const addToCart = (product) => {
    setState({
      ...state,
      cart: [...state.cart, product],
    });
  };

  const removeFromCart = (product) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== product.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
}

export { useInitialState };
