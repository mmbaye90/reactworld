import { BrowserRouter,Switch,Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

function App() {
  return (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />

    <Route  component={Notfound} />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
