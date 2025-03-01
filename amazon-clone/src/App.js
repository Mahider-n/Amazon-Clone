
import Routering from './Router';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useContext, useEffect } from 'react';
import { DataContext } from './Components/DataProvider/DataProvider';
import {auth} from "./Utility/firebase";
import { Type } from './Utility/action.type';
import React from 'react';
 
function App() {
  // const [count, setCount] = useState(0);
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);


  return <Routering /> 
}

export default App;

