import Header from "../../components/Header/Header";
import Background from '../../assets/images/background/interactionsBg.png';
import Slider from "../../components/Slider/Slider";
import Interaction1 from "./IntComponents/Interaction1";
import Interaction2 from "./IntComponents/Interaction2";
import Interaction3 from "./IntComponents/Interaction3";
import {CONTROLLER_DATA} from './Data/controllerData';

const components = [Interaction1, Interaction2, Interaction3];

const Interactions = () => {
    return ( 
        <div
        style = {{backgroundImage: `url(${Background})`}}
        className = "int">
            <Header />
            <div className = " int-container container">
              <Slider
              controller = {CONTROLLER_DATA}
              components = {components}/>
             
            </div> 
            
        </div>
     );
}
 
export default Interactions;