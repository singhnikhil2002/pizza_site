import "./App.css";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import TopBar from "./component/Topbar";
import About from "./component/About";
import Contact from "./component/Contact";
import Policy from "./component/Policy";

function App() {
  return (
    <>
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/policy" component={Policy} exact/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
