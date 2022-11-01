import { createContext, useState } from "react";

const MoviesInitialValues = {
  id: null,
  findGenre: false,
  toggleGenre: () => null,
};

export const GenreContext = createContext(MoviesInitialValues);

export const GenreContextProvider = ({ children }) => {
  const [genre, setGenre] = useState({
    id: null,
    findGenre: false,
  });

  const toggleGenre = (id) => {
    if (id !== genre.id) {
      return setGenre({
        id: id,
        findGenre: true,
      });
    } else {
      return setGenre({ id: null, findGenre: false });
    }
  };
  return (
    <GenreContext.Provider value={{ ...genre, toggleGenre }}>
      {children}
    </GenreContext.Provider>
  );
};
