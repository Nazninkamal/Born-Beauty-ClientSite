import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Contact from './Pages/Home/Contact/Contact';
import Skincare from './Pages/Products/Skincare/Skincare';
import Skincares from './Pages/Products/Skincares/Skincares';
import Cosmetics from './Pages/Products/Cosmetics/Cosmetics';



function App() {
    return (
    <div className="App">
      <Router>
        <Header></Header>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
         <Route path="/skincares" element={<Skincares/>}></Route>
         <Route path="/cosmetics" element={<Cosmetics/>}></Route>
        
         <Route path= "*" element={<NotFound/>}></Route>
        
       </Routes>
       <Footer></Footer>
      </Router>
    </div>
  );
}

   

export default App;
