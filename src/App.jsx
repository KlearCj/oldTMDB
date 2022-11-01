import { AuthContextProvider } from "./context/AuthContext";
import { DetailContextProvider } from "./context/Details";
import { GenreContextProvider } from "./context/MoviesGenres";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <DetailContextProvider>
        <GenreContextProvider>
          <AuthContextProvider>
            <Home />
          </AuthContextProvider>
        </GenreContextProvider>
      </DetailContextProvider>
    </>
  );
};

export default App;
