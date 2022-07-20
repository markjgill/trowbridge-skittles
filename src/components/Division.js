import { useParams } from "react-router-dom";

const Division = () => {
    const params = useParams();

    return <h2>Division {params.division}</h2>
};

export default Division;