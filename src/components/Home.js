import RealEstateList from "./RealEstateList"
import Banner from "./Banner"
import CarouselFeatured from "./CarouselFeatured"
import React from "react"
import Teams from "./Teams"
import References from "./References"
import Subscribe from "./Subscribe"

const Home=()=>{
    return (
        <React.Fragment>
            <Banner/>
            <RealEstateList/>
            <CarouselFeatured/>
            <Subscribe/>
            <Teams/>
            <References/>
        </React.Fragment>
    )
}

export default Home;