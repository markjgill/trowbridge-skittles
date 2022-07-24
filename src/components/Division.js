import { useContext } from "react";
import { useParams } from "react-router-dom";

import LeagueStats from "./LeagueStats";
import Fixtures from "./Fixtures";
import SeasonContext from "../context/SeasonContext";

const Division = () => {
    const [season] = useContext(SeasonContext);
    const params = useParams();

    const fixtures = [
        {
            week: 1,
            fixtures: [
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        },
        {
            week: 2,
            fixtures: [
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        },
        {
            week: 3,
            fixtures: [
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        },
        {
            week: 4,
            fixtures: [
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        },{
            week: 5,
            fixtures: [
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        },
        {
            week: 6,
            fixtures: [
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        },
        {
            week: 7,
            fixtures: [
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        },
        {
            week: 8,
            fixtures: [
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        },
        {
            week: 9,
            fixtures: [
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-02", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        },
        {
            week: 10,
            fixtures: [
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" },
                { date: "2022-09-12", alley: "Southwick", home: "Southwick", away: "Derek's Mates" }
            ]
        }
    ];

    return (
        <>
            <h2 className="m-0">Division {params.division} - Season {season}</h2>
            <div className="flex gap-3">
                <div className="flex-none">
                    <LeagueStats fixtures={fixtures} />
                </div>
                <div className="flex-auto">
                    <Fixtures fixtures={fixtures} />
                </div>
            </div>
        </>
    );
};

export default Division;