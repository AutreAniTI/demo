import CircularMenuContainer from "../components/CircularMenu/CircularMenu";
import Video from '../assets/videos/island.mp4';

const Menu = () => {
    return ( 
        <div
        className = "home">
            <video
            className = "island-video"
             autoPlay muted loop>
                <source src= {Video} type="video/mp4"/>
            </video>
            <CircularMenuContainer/>
        </div>
        
     );
}
 
export default Menu;