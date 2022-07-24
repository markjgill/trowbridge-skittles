import { useContext } from "react";

import SeasonContext from "../context/SeasonContext";

const Home = () => {
    const [season] = useContext(SeasonContext);

    return <h2 className="m-0">Welcome to season {season}</h2>;
};

export default Home;