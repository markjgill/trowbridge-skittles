import Header from "./Header"
import MenuBar from "./MenuBar";
import Content from "./Content";

const Layout = () => 
    <div className="px-3 pb-3">
        <Header />
        <div className="flex gap-3">
            <div className="flex-none "><MenuBar /></div>
            <div className="flex-auto"><Content /></div>
        </div>
    </div>;

export default Layout;