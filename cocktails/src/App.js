import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components
import Navbar from "./Components/Navbar";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cocktail/:id" component={SingleCocktail} />
        <Route path="/error" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
