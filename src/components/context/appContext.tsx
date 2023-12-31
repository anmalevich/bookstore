import React, { createContext, useContext, useState } from 'react';

interface FavoriteItem {
  id: number;
  name: string;
}

interface CartItem {
  id: number;
  name: string;
}

interface AppContextValue {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;

}

const AppContext = createContext<AppContextValue | null>(null);

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error("AppContext must be within the AppContextProvider!");
  }
  return context;
};

interface IAppProvider {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: IAppProvider) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => [...prevCart, item]);
  }

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites(prevFavorites => [...prevFavorites, item]);
  }

  const removeFromFavorites = (id: number) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== id));
  }

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, cart, addToCart, removeFromCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

