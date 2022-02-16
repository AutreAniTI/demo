import Navigation from '../container/Navigation/Navigation';


const Home = () => {
    return (
        <div
        className = "home">
            <video
            className = "island-video"
             autoPlay muted loop>
                <source src="https://res.cloudinary.com/dgntbs1qb/video/upload/v1645005178/TI/island.f70526ef_hpxv0y.mp4" type="video/mp4"/>
            </video>
            <Navigation />
        </div>
    );
}

export default Home;