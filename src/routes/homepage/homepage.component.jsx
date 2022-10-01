import { Fragment } from "react";
import { useSelector } from "react-redux";
import Carousel from "../../components/carousel/carousel.component";

const Homepage = () =>{
    
const productsFromStore = useSelector((state) => state.products);
    console.log(productsFromStore);
    return (
        <Fragment>
            <Carousel />
        </Fragment>
    )
}
export default Homepage;