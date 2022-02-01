import Navigation from '../container/Navigation/Navigation';
import Video from '../assets/videos/island.mp4';


const Home = () => {
    return (
        <div
        className = "home">
            <video
            className = "island-video"
             autoPlay muted loop>
                <source src= {Video} type="video/mp4"/>
            </video>
            <Navigation />
        </div>
    );
}

export default Home;