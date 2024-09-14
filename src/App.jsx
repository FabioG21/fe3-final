
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import { useDentStates } from "./Components/utils/global.context";



function App() {
  const {state} = useDentStates();
  return (
      <div className={state.theme === 'dark' ? 'dark' : 'App'}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
            <Route path="*" element={<h2>Error 404</h2>}/>

          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
