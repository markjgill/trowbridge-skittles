import { useContext } from "react";
import { SplitButton } from "primereact/splitbutton";
import { Button } from "primereact/button";

import MenuBar from "./MenuBar";
import SeasonContext from "../context/SeasonContext";
import skittles from "../assets/images/skittles.jpg";

const Header = () => {
    const [season, setSeason] = useContext(SeasonContext);

    const seasons = [
        { label: "2021-22", command: e => setSeason(e.item.label) },
        { label: "2022-23", command: e => setSeason(e.item.label) }
    ];

    return (
        <>
            <div className="h-14rem bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${skittles})` }}>
                <h1 className="text-8xl text-center text-white m-0">Trowbridge Town Skittles League</h1>
            </div>
            <div className="flex align-items-center">
                <div className="flex-auto">
                    <MenuBar />
                </div>
                <div className="flex-none">
                    <span className="font-bold text-primary pr-2">Season:</span>
                    <SplitButton className="p-button-text" buttonClassName="p-0" label={season} model={seasons} />
                    <Button className="p-button-text" label="Sign In" />
                </div>
            </div>
        </>
    );
};

export default Header;