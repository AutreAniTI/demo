import Interactions from "./container/Interactions/Interactions";
import Home from "./container/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {
  HOME,
  DEFAULT,
  INTERACTIONS,
} from './constants/routes';
//test

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = {INTERACTIONS} component = {Interactions}/>
          <Route path={DEFAULT} exact component={Home} />
          <Route path={HOME} exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
