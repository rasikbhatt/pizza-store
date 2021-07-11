import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
