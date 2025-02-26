import Header from "../global/Header";
import Footer from "../global/Footer";

import "./Home.css";

function Home() {

    return (
        <>  
            <Header />
                <main className="home">
                    <h1>I am the home page</h1>
                </main>
            <Footer />
        </>
    );

}

export default Home;