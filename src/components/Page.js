import { Outlet } from "react-router-dom";

import News from "./News";

const Page = () =>
    <div className="grid">
        <div className="col-8">
            <Outlet />
        </div>
        <div className="col-4">
            <News />
        </div>
    </div>;

export default Page;