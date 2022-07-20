import { useState } from 'react';
import { SplitButton } from "primereact/splitbutton";
import { Button } from "primereact/button";

const Header = () => {
    const [season, setSeason] = useState("2022/23");

    const seasons = [
        { label: "2021/22", command: e => setSeason(e.item.label) },
        { label: "2022/23", command: e => setSeason(e.item.label) }
    ];

    return (
        <div className="flex mb-4">
            <h1 className="flex-auto m-0">Trowbridge Town Skittles League</h1>
            <SplitButton className="p-button-text" buttonClassName="p-0" label={season} model={seasons} />
            <Button className="p-button-text" label="Sign In" />
        </div>
    );
};

export default Header;