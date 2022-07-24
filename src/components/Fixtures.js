import { DateTime } from "luxon";
import { Timeline } from "primereact/timeline";
import { Badge } from "primereact/badge";
import { Card } from "primereact/card";

const Fixtures = ({ fixtures }) => {
    const marker = ({ week }) => <Badge value={week} />;

    const content = ({ fixtures }) =>
        <Card className="border-2 surface-border">
            {fixtures.map(({ date, alley, home, away }) =>
                <div>
                   {`${DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)} - ${alley} - ${home} vs ${away}`}
                </div>
            )}
        </Card>

    return (
        <>
            <div className="text-center">
                <h3>Fixtures</h3>
                <h4 className="m-1">Week</h4>
            </div>
            <Timeline value={fixtures} align="alternate" marker={marker} content={content} />
        </>
    );
};

export default Fixtures;