import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import StoreProvider from "./context/StoreContext";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <StoreProvider>
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}

        <Navbar setShowLogin={setShowLogin} />
        <Home />
        <Footer />
      </StoreProvider>
    </>
  );
};

export default App;
