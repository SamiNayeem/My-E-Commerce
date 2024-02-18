import React from "react";
import Slider from "./Components/Slider/Slider";
import FlashItems from "./Components/Flash Items/FlashItems";
import RecommendedItems from "./Components/Recommended Items/RecommendedItems";
import Privilages from "./Components/Privileges/Privileges";

const Page = () => {
    return(
        <div className="mt-20">
            
            <Slider />
            <Privilages />
            <FlashItems />
            <RecommendedItems />

        </div>
    );
}

export default Page;