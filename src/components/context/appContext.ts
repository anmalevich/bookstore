import React, { createContext, useContext, useState } from 'react';

interface FavoriteItem {
  id: number;
  name: string;
}

interface AppContextValue {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error("AppContext must be within the AppContextProvider!");
  }
  return context;
};

interface AppProvider {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProvider) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites(prevFavorites => [...prevFavorites, item]);
  }

  const removeFromFavorites = (id: number) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== id));
  }

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};

