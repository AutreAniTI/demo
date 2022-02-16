import CircularMenuContainer from "../components/CircularMenu/CircularMenu";

const Menu = () => {
    return ( 
        <div
        className = "home">
            <video
            className = "island-video"
             autoPlay muted loop>
                <source src= "https://res.cloudinary.com/dgntbs1qb/video/upload/v1645005178/TI/island.f70526ef_hpxv0y.mp4" type="video/mp4"/>
            </video>
            <CircularMenuContainer/>
        </div>
        
     );
}
 
export default Menu;