import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Work, Contact } from "./components/index";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path={`/home`} component={Home} />
            <Route exact path={`about`} component={About} />
            <Route exact path={`/work`} component={Work} />
            <Route exact path={`/contact`} component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
