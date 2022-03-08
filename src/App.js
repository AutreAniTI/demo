import Interactions from "./Pages/Interactions";
import Home from "./Pages/Home";
import Performance from './Pages/Performance';
import Pricing from './Pages/Pricing';
import Chat from "./Pages/Chat";
import Charts from "./Pages/Charts";
import Menu from "./Pages/CircularMenu";
import ChartRadar from "./Pages/ChartRadar";
import ClientEval from "./Pages/ClientEval";
import SSILinkedIn from "./Pages/SSILinkedIn";
import Personality from "./Pages/Personality";
import LeadMagnetInt from "./Pages/LeadMagnetInt";
import Navigation from "./container/LeadMagnet/Navigation/Navigation";
import Calendly from "./Pages/Calendly";
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
  CLIENT_EVAL,
  PERSONALITY,
  LEAD_MAGENT,
  LEAD_MAGNET_OPTIONS,
  CALENDLY
} from './constants/routes';


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
          <Route path={RADAR_CHART} component={ChartRadar} />
          <Route path={LINKEDIN_SSI} component={SSILinkedIn} />
          <Route path={CLIENT_EVAL} component={ClientEval} />
          <Route path={PERSONALITY} component={Personality} />
          <Route path={LEAD_MAGENT} component={LeadMagnetInt} />
          <Route path={LEAD_MAGNET_OPTIONS} component={Navigation} />
          <Route path={CALENDLY} component={Calendly} />
          <Route path={DEFAULT} exact component={Home} />
          <Route path={HOME} exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
