import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

import "./PageWrap.css";

function PageWrap() {

    return (
        <>
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </>
    );

}

export default PageWrap;