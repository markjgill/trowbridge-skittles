import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const LeagueStats = ({ fixtures }) => {
    const table = [
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 },
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 },
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 },
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 },
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 },
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 },
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 },
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 },
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 },
        { team: "Southwick", played: 4, won: 2, drew: 1, points: 15.5 }
    ];

    return (
        <>
            <h3>League Table</h3>
            <DataTable tableClassName="border-3 surface-border" value={table} size="small" responsiveLayout="scroll">
                <Column field="team" header="Team"></Column>
                <Column field="played" header="P"></Column>
                <Column field="won" header="W"></Column>
                <Column field="drew" header="D"></Column>
                <Column field="points" header="Pts"></Column>
            </DataTable>
        </>
    );
};

export default LeagueStats;