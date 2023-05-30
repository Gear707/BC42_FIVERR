import React from 'react';
import Categories from "./Categories/Categories";
import SellingPoint from "./SellingPoint/SellingPoint";

function Home() {
    return (
        <div>
            <SellingPoint />
            <Categories />
        </div>
    );
}

export default Home;