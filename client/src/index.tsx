// Library Imports
import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Component Imports
import TopNavigation from "./navigation/top-navigation/topNavigation";

// Service Imports
import reportWebVitals from "./reportWebVitals";

// Styling Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <TopNavigation />
      <Router>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
