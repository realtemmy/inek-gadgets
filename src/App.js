import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategories } from "./reducers/product-reducer/product.action";
import Navigation from "./routes/navigation/navigation.component";
// import Homepage from "./routes/homepage/homepage.component";
import Footer from "./routes/footer/footer.component";

import './App.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((response) => response.json())
    //   .then((data) => dispatch(setCategories(data.products)))
    //   .catch(err => console.log(err));
  }, [dispatch]);
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          {/* <Route index element={<Homepage />} /> */}
          <Route path="/" element={<Footer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
