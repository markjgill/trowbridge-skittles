import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header"
import MenuBar from "./MenuBar";
import News from "./News";

const Layout = () =>
    <>
        <Header />
        <div className="flex gap-3 p-3 border-top-2 border-primary">
            <div className="flex-auto border-right-2 border-primary">
                <Outlet />
            </div>
            <div className="flex-none">
                <News />
            </div>
        </div>
        <Footer />
    </>

export default Layout;