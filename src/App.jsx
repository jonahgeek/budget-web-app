import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";
import Nav from "./components/Nav";
import Transactions from "./pages/Transactions";

const App = () => {
  return (
    <GlobalContextProvider>
      <Router>
        <Nav />
        <main className="container">
          <Switch>
            <Route path="/" exact component={Transactions} />
          </Switch>
        </main>
      </Router>
    </GlobalContextProvider>
  );
};

export default App;
