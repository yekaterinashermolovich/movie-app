
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MovieDetail } from "./pages/MovieDetail/MovieDetail";
import  Home from "./pages/home/home";
import MovieList  from "./components/MovieList/MovieList";


const App = () => {
  return (
   <div className='App'>
     <Router>
       <Routes>
         <Route index path = "/" element = {<Home />} />
         <Route path = "movies/:type" element = {<MovieList />} />
         <Route path = "movie/:id" element = {<MovieDetail />} />
       </Routes>
     </Router>
   </div>
   

  );
}

export default App;
