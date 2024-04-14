
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MovieDetail } from "./pages/MovieDetail/MovieDetail";
import Header from "./components/header/Header";
import  Home from "./pages/home/home";
import MovieList  from "./components/MovieList/MovieList";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          {/* маршрут должен быть активирован при совпадении с корневым путем */}
          <Route path="movie/:id" element={<MovieDetail />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
