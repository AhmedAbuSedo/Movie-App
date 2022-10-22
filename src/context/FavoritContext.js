import React, {createContext, useContext, useState} from 'react';
const FavoritContext = createContext({
  favorite: [],
  setFavorite: () => [],
});

const FavoirtProvider = ({children}) => {
  const [favorite, setFavorite] = useState([]);
  return (
    <FavoritContext.Provider value={{favorite, setFavorite}}>
      {children}
    </FavoritContext.Provider>
  );
};

const useFavoritContext = () => useContext(FavoritContext);
export {useFavoritContext, FavoirtProvider};
