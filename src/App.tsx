import Navbar from "./components/Navbar";
import Home from './components/Home';
import SingleIngredient from "./components/SingleIngredient";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ingredients" element={<Home />} />
            <Route path="/ingredients/:id" element={<SingleIngredient />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}
 
export default App