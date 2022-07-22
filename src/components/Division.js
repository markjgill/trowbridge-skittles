import { useContext } from "react";
import { useParams } from "react-router-dom";

import SeasonContext from "../context/SeasonContext";

const Division = () => {
    const [season] = useContext(SeasonContext);
    const params = useParams();

    return <h2 className="m-0">Division {params.division} - Season {season}</h2>;
};

export default Division;