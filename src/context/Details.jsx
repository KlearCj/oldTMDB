import { createContext, useState } from "react";

const DetailsInitialValues = {
  overview: "",
  id: null,
  view: false,
  toggleView: () => null,
};

export const DetailContext = createContext(DetailsInitialValues);

export const DetailContextProvider = ({ children }) => {
  const [details, setDetails] = useState({
    overview: "",
    id: null,
    view: false,
  });

  const toggleView= (id, overview) => {
    if (id !== details.id) {
      return setDetails({
        overview: overview,
        id: id,
        view: true,
      });
    } else {
      return setDetails({overview: "", id: null, view: false });
    }
  };
  return (
    <DetailContext.Provider value={{ ...details, toggleView }}>
      {children}
    </DetailContext.Provider>
  );
};