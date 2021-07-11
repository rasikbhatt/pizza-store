import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
