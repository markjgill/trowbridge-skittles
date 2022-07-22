import Header from "./Header"
import MenuBar from "./MenuBar";
import Page from "./Page";

const Layout = () =>
    <div className="px-3 pb-3">
        <Header />
        <div className="flex gap-3">
            <div className="flex-none bg-primary-100"><MenuBar /></div>
            <div className="flex-auto"><Page /></div>
        </div>
    </div>;

export default Layout;