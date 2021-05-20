import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"
import TeamList from "./TeamList"
import References from "./References"
import Subscribe from "./Subscribe"
import BestFlatList from "./BestFlatList"

const Home=()=>{
    return (
        <React.Fragment>
            <Banner/>
            <FlatList/>
            <BestFlatList/>
            <Subscribe/>
            <TeamList/>
            <References/>
        </React.Fragment>
    )
}

export default Home;