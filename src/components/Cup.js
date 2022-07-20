import { useParams } from "react-router-dom";

const Cup = () => {
    const params = useParams();

    return <h2>{params.cup}</h2>
};

export default Cup;