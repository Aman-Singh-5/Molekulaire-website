
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Landing } from './components/Landing';
import { Shop } from "./components/shop/Shop";


function App() {
  return (

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/shop" element={<Shop/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
