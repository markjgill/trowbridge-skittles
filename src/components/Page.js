import { Outlet } from "react-router-dom";

import News from "./News";

const Page = () =>
    <div class="grid">
        <div class="col-8">
            <Outlet />
        </div>
        <div class="col-4">
            <News />
        </div>
    </div>;

export default Page;