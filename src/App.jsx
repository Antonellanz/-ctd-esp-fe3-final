import {Route,Routes} from "react-router-dom"
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import Form from "./Components/Form";



function App() {
  return (
    
      
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentista/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
           
          </Routes>
      
        
  );
}

export default App;
