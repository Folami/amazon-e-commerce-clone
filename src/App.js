import React, { useEffect } from "react";
import "./App.css";
import { useStateValue } from "./services/StateProvider";
import { firebaseAuth } from "./services/firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
    const [{}, dispatch] = useStateValue();

    const firebaseAuthHook = () => {
        // will only run once when the app component loads...
        firebaseAuth.onAuthStateChanged((authUser) => {
            console.log("THE USER IS >>> ", authUser);
            if (authUser) {
                // the user just logged in / the user was logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }
    useEffect(firebaseAuthHook, []);

    function HomeAndHeader() {
      return (
          <div>
              <Header />
              <Home />
          </div>
      );
    }

    function CheckoutAndHeader() {
        return (
            <div>
                <Header />
                <Checkout />
            </div>
        );
    }

      function Authentication() {
        return (
          <div>
            <Header />
            <Login />
          </div>
        );
      }

      // BEM naming convention
      return (
        <div className="app">
          {/*<h1>E-commerce clone</h1>*/}
          <Router>
            <Routes>
              <Route exact path="/login" element={<Authentication />} />
              <Route exact path="/checkout" element={<CheckoutAndHeader />} />
              <Route exact path="/" element={<HomeAndHeader />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;
