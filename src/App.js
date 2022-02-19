import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./components/Hero";
import Products from "./components/Products";

import {productData, productDataTwo} from './components/Products/data';

import { GlobalStyle } from "./assets/styles/global";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Escolha sua favorita' data={productData} id="pizza" />
      <Feature />
      <Products heading='Sobremesas para você' data={productDataTwo} id="dessert"/>
      <Footer />
    </Router>
  );
}

export default App;
