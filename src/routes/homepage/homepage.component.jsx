import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Carousel from "../../components/carousel/carousel.component";

const Homepage = () =>{
    const categories = useSelector((state) => state.category);

    console.log(categories);
    return (
        <Fragment>
            <Carousel />
            
            Hello world
        </Fragment>
    )
}
export default Homepage;