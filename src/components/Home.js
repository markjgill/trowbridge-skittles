import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";

const Home = () => {
    const items = [
        { date: "20230727", title: "Something happened", isSevere: false, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "20220727", title: "Something happened", isSevere: true, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "20210727", title: "Something happened", isSevere: false, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "20200727", title: "Something happened", isSevere: false, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "20190727", title: "Something happened", isSevere: true, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { date: "20180727", title: "Something happened", isSevere: true, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" }
    ];

    const itemTemplate = product => {
        const classes = product.isSevere ? "bg-red-100 border-red-600" : "border-primary-600";

        return (
            <Card className={`my-1 border-left-3 border-bottom-none ${classes}`} subTitle={`${product.date} - ${product.title}`}>
                {product.message}
            </Card>
        );
    };

    return (
        <>
            <div class="grid">
                <div class="col-8">
                    <h2 className="m-0">Welcome</h2>
                </div>
                <div class="col-4">
                    <h2 className="m-0">Latest news</h2>
                    <DataView value={items} itemTemplate={itemTemplate} layout="list" paginator rows={3} />
                </div>
            </div>
        </>
    );
};

export default Home;