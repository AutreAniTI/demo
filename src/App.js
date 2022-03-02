import Interactions from "./Pages/Interactions";
import Home from "./Pages/Home";
import Performance from './Pages/Performance';
import Pricing from './Pages/Pricing';
import Chat from "./Pages/Chat";
import Charts from "./Pages/Charts";
import Menu from "./Pages/CircularMenu";
import ChartRadar from "./Pages/ChartRadar";
import ClientEval from "./Pages/ClientEval";
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
  PRICING,
  CHAT,
  CHARTS,
  MENU,
  RADAR_CHART,
  LINKEDIN_SSI,
  CLIENT_EVAL
} from './constants/routes';
import SSILinkedIn from "./Pages/SSILinkedIn";

function App() {
  return (
    <div className="App">
      <Router
        basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={INTERACTIONS} component={Interactions} />
          <Route path={PERFORMANCE} component={Performance} />
          <Route path={PRICING} component={Pricing} />
          <Route path={CHAT} component={Chat} />
          <Route path={CHARTS} component={Charts} />
          <Route path={MENU} component={Menu} />
          <Route path={RADAR_CHART} component = {ChartRadar}/>
          <Route path = {LINKEDIN_SSI} component ={SSILinkedIn}/>
          <Route path = {CLIENT_EVAL} component = {ClientEval} />
          <Route path={DEFAULT} exact component={Home} />
          <Route path={HOME} exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
