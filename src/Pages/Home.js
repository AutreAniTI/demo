import Navigation from '../container/Navigation/Navigation';


const Home = () => {
    return (
        <div
        className = "home">
            <video
            className = "island-video"
             autoPlay muted loop>
                <source src="https://www.youtube.com/watch?v=qRyIH4L7A8M" type="video/mp4"/>
            </video>
            <Navigation />
        </div>
    );
}

export default Home;