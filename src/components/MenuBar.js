import { useNavigate } from "react-router-dom";
import { PrimeIcons } from "primereact/api";
import { Menu } from "primereact/menu";

const MenuBar = () => {
    const navigate = useNavigate();

    const items = [
        { label: "Home", icon: PrimeIcons.HOME, command: e => navigate("/") },
        {
            label: "League",
            items: [
                { label: "Division 1", command: e => navigate("division/1") },
                { label: "Division 2", command: e => navigate("division/2") },
                { label: "Division 3", command: e => navigate("division/3") }
            ]
        },
        {
            label: "Cups",
            items: [
                { label: "8-a-side Nomination", command: e => navigate("cups/8-a-side") },
                { label: "10-a-side Nomination", command: e => navigate("cups/10-a-side") },
                { label: "Front Pin", command: e => navigate("cups/front-pin") },
                { label: "Phil Allen Cup", command: e => navigate("cups/phil-allen") },
                { label: "Fricker Cup", command: e => navigate("cups/fricker") }
            ]
        }
    ];

    return <Menu model={items} />;
};

export default MenuBar;