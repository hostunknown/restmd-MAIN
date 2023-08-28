import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "./ScrolltoTop"

// COMPONENTS
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

//PATHS
import Home from "./components/Homepage/Home"
import About from "./components/Aboutpage/About"
import Contact from "./components/Contactpage/Contact"
import Search from "./components/Navbar/Searchicon"
import FoodAndPeople from "./components/FoodAndPeople/FoodAndPeople"
import MainNews from "./components/MainNewsPage/MainNewsPage"
import Catalog from "./components/Catalog/Catalog"


import News1 from "./components/NewsPages/NewsPage1"
import News2 from "./components/NewsPages/NewsPage2"
import News3 from "./components/NewsPages/NewsPage3"

// FOOD AND PEOPLE ELEMENTS
import CulinaryG from "./components/FoodAndPeople/culinary-geography/Culinary"
import ImportantIdeas from "./components/FoodAndPeople/important-ideas/Impideas"
import Xgurman from "./components/FoodAndPeople/x-gurman/Xgurman"


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/search' element={<Search />} />
        <Route path='/food-and-people' element={<FoodAndPeople />} />
        <Route path='/news' element={<MainNews />} />
        <Route path='/catalog' element={<Catalog />} />

        {/* FOOD AND PEOPLE ELEMENTS */}
        <Route path='/food-and-people/culinary-geography' element={<CulinaryG />} />
        <Route path='/food-and-people/important-ideas' element={<ImportantIdeas />} />
        <Route path='/food-and-people/x-gurman' element={<Xgurman />} />
        {/* FOR NEWS */}
        <Route path='/food-and-people/culinary-geography/news1' element={<News1 />} />
        <Route path='/food-and-people/culinary-geography/news2' element={<News2 />} />
        <Route path='/food-and-people/culinary-geography/news3' element={<News3 />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      </div>
      </Router>
  );
}

export default App;
