import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Contact from './Pages/Home/Contact/Contact';
import Skincares from './Pages/Products/Skincares/Skincares';
import Cosmetics from './Pages/Products/Cosmetics/Cosmetics';
import About from './Pages/Home/About/About';

import SkincareAddService from './Pages/SkincareAddService/SkincareAddService';
import CosmeticsAddService from './Pages/CosmeticsAddService/CosmeticsAddService';
import Login from './Pages/Login/Login/Login';
import AnimatedCursor from 'react-animated-cursor';
import PurchaseBox from './Pages/PurchaseBox/PurchaseBox';
// import AnimatedCursor from "react-animated-cursor"




function App() {
    return (
    <div className="App">
       <AnimatedCursor  innerSize={15}
        outerSize={10} />
      <Router >
    <Header></Header>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
         <Route path="/skincares" element={<Skincares/>}></Route>
         <Route path="/cosmetics" element={<Cosmetics/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         {/* <Route path="/purchase" element={<PurchaseBox/>}></Route> */}
         <Route path="/skincareaddservice" element={<SkincareAddService/>}></Route>
         <Route path="/cosmeticsaddservice" element={<CosmeticsAddService/>}></Route>
         <Route path="/login" element={<Login/>}></Route>



        
         <Route path= "*" element={<NotFound/>}></Route>
        
       </Routes>
       <Footer></Footer>
      </Router>
    </div>
  );
}

   

export default App;
