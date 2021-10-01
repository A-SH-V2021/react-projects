import "./App.css";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import GlobalStyle from "./GlobalStyle";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
