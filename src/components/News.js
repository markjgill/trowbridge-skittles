import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";
import { DateTime } from "luxon";


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
        const classes = product.isSevere ? "border-red-600" : "border-primary-600";
        const date = DateTime.fromISO(product.date).toLocaleString(DateTime.DATE_MED);

        return (
            <Card className={`my-1 border-left-3 border-bottom-none ${classes}`} subTitle={`${date} - ${product.title}`}>
                {product.message}
            </Card>
        );
    };

    return (
        <>
            <h2 className="m-0">Latest news</h2>
            <DataView value={items} itemTemplate={itemTemplate} layout="list" paginator rows={3} />
        </>
    );
};

export default News;