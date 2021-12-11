import { BrowserRouter,Switch,Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

function App() {
  return (
  <BrowserRouter>
  <Switch>
    <Route  path="/" exact component={Home} />
    <Route  path="/about" exact component={About} />

    <Route  component={Notfound} />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
