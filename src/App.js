
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MovieDetail } from "./pages/MovieDetail/MovieDetail";
import Header from "./components/header/Header";
import  Home from "./pages/home/home";
import MovieList  from "./components/MovieList/MovieList";
import FavoriteMovies from './pages/favoriteMovies/favoriteMovies';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="favorites" element={<FavoriteMovies />} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
