import Interactions from "./Pages/Interactions";
import Home from "./Pages/Home";
import Performance from './Pages/Performance';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {
  HOME,
  DEFAULT,
  INTERACTIONS,
  PERFORMANCE,
} from './constants/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = {INTERACTIONS} component = {Interactions}/>
          <Route path = {PERFORMANCE} component = {Performance}/>
          <Route path={DEFAULT} exact component={Home} />
          <Route path={HOME} exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
