import { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page></Page>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
