import "./App.css";

import ErrorBoundry from "./ErrorBoundry";
import CustomerDashboard from "./CustomerDashboard";
import NavbarTop from "./NavbarTop";

import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Route path="/loginpage" component={LoginPage} />
      <Route path="/customerDashboard" component={CustomerDashboard} />
    </div>
  );
}

export default App;
