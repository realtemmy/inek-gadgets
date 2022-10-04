import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  fetchProductsAsync } from './reducers/product-reducer/product.action'
import Navigation from "./routes/navigation/navigation.component";
import Homepage from "./routes/homepage/homepage.component";
import Footer from "./routes/footer/footer.component";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="/" element={<Footer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
