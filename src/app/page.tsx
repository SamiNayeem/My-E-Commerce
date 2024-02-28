import React from "react";
import Slider from "./Components/Slider/Slider";
import FlashItems from "./Components/Flash Items/FlashItems";
import RecommendedItems from "./Components/Recommended Items/RecommendedItems";
import Privilages from "./Components/Privileges/Privileges";
import Advertisement from "./Components/Ad/Advertisement";
import Categories from "./Components/Categories/Categories";

const Page = () => {
    return(
        <div className="">
            <Advertisement/>
            <Slider />
            <Privilages />
            <Categories />
            <FlashItems />
            <RecommendedItems />

        </div>
    );
}

export default Page;