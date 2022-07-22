import { useContext } from "react";
import { SplitButton } from "primereact/splitbutton";
import { Button } from "primereact/button";

import SeasonContext from "../context/SeasonContext";

const Header = () => {
    const [season, setSeason] = useContext(SeasonContext);

    const seasons = [
        { label: "2021-22", command: e => setSeason(e.item.label) },
        { label: "2022-23", command: e => setSeason(e.item.label) }
    ];

    return (
        <div className="flex border-bottom-2 border-primary mt-2 mb-4">
            <h1 className="flex-auto m-0">Trowbridge Town Skittles League</h1>
            <div>
                <span className="font-bold text-primary pr-2">Season:</span>
                <SplitButton className="p-button-text" buttonClassName="p-0" label={season} model={seasons} />
            </div>
            <Button className="p-button-text" label="Sign In" />
        </div>
    );
};

export default Header;