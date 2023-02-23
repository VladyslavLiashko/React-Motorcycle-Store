
import './App.css';
import Header from './Components/Header/Header';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Motorcycles from './Components/Motorcycles/Motorcycles';
import Item from './Components/Item/Item';
import OurBlog from './Components/Blog/Blog';
import Contacts from './Components/Contacts/Contacts';
import Json from "./data/data.json";
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />
//   },
//   {
//     path: "/Motorcycles",
//     element: <Motorcycles/>
//   }
// ]);

function App() {

  return (
    <div className="App">
      <Header data = {Json.Header} />
      <Routes>
        <Route path='/' element={<Main data ={Json.Main}/>} />
        <Route path='/Motorcycles' element={<Motorcycles />} />
        <Route path='/Motorcycles/:productId' element ={<Item/>} />
        <Route path='/Blog' element ={<OurBlog/>} />
        <Route path = '/Contacts' element={<Contacts data = {Json.Contacts} />} />
        <Route path='/Shopping-Cart' element={<ShoppingCart/>} />
      </Routes>
      {/* <RouterProvider router={router} /> */}
      <Footer data ={Json.Footer} />
    </div>
  );
}

export default App;
