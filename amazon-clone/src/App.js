import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Header from './Components/Header/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from './Components/Category/Category';
import Product from './Components/Product/Product';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </div>
  );
}

export default App;
