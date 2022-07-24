import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
;
const MenuBar = () => {
    const navigate = useNavigate();

    const template = label => <Button className="p-button-text" label={label} />;

    const items = [
        { template: template("Home"), command: e => navigate("/") },
        { template: template("Division 1"), command: e => navigate("division/1") },
        { template: template("Division 2"), command: e => navigate("division/2") },
        { template: template("Division 3"), command: e => navigate("division/3") },
        { template: template("8-a-side Nomination Cup"), command: e => navigate("cups/8-a-side") },
        { template: template("10-a-side Nomination Cup"), command: e => navigate("cups/10-a-side") },
        { template: template("Front Pin Cup"), command: e => navigate("cups/front-pin") },
        { template: template("Phil Allen Cup"), command: e => navigate("cups/phil-allen") },
        { template: template("Fricker Cup"), command: e => navigate("cups/fricker") }
    ];

    return <Menubar className="p-0" model={items} />;
};

export default MenuBar;