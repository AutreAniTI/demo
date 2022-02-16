import CircularMenuContainer from "../components/CircularMenu/CircularMenu";

const Menu = () => {
    return ( 
        <div
        className = "home">
            <video
            className = "island-video"
             autoPlay muted loop>
                <source src= "https://www.youtube.com/watch?v=qRyIH4L7A8M" type="video/mp4"/>
            </video>
            <CircularMenuContainer/>
        </div>
        
     );
}
 
export default Menu;