import { DateTime } from "luxon";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";

const News = () => {
    const items = [
        { date: "2023-07-27", title: "Something happened", isSevere: false, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "2022-07-27", title: "Something happened", isSevere: true, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "2021-07-27", title: "Something happened", isSevere: false, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "2020-07-27", title: "Something happened", isSevere: false, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "2019-07-27", title: "Something happened", isSevere: true, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "2018-07-27", title: "Something happened", isSevere: true, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" }
    ];

    const itemTemplate = product => {
        const classes = product.isSevere ? "border-red-600" : "surface-border";
        const date = DateTime.fromISO(product.date).toLocaleString(DateTime.DATE_MED);

        return (
            <Card className={`col-12 my-1 border-left-3 border-1 ${classes}`} subTitle={`${date} - ${product.title}`}>
                <div className="`$classes}`">{product.message}</div>
            </Card>
        );
    };

    return (
        <div className="min-w-18rem max-w-18rem">
            <h2 className="m-0">Latest news</h2>
            <DataView value={items} itemTemplate={itemTemplate} />
        </div>
    );
};

export default News;