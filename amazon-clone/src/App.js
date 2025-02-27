import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Header from './Components/Header/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from './Components/Category/Category';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
    </div>
  );
}

export default App;
