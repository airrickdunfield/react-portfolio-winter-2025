import Header from "../global/Header";
import Footer from "../global/Footer";

import bannerImage from "../assets/home-banner-image.png";

import "./Home.css";

function Home() {

    return (
        <>  
            <div className="container">
                <div className="grid">
                    <div className="col-12 col-5-lg">
                        <img src={bannerImage} alt="" />
                    </div>
                    <div className="col-12 col-7-lg">
                        <h1>I am the home page</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem corporis placeat, officiis mollitia possimus minima aperiam dolor? Rerum cumque aspernatur et magni? Repellendus corporis tenetur repellat, rerum eveniet impedit nesciunt!</p>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home;