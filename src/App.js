
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MovieDetail } from "./pages/MovieDetail/MovieDetail";
import  Home from "./pages/home/home";


const App = () => {
  return (
   <div className='App'>
     <Router>
       <Routes>
         <Route index path = "/" element = {<Home />} />
       </Routes>
     </Router>
   </div>
   

  );
}

export default App;
