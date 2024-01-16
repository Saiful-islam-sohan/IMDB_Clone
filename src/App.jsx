
// import './App.css'

import { Routes, Route } from "react-router-dom"
import Banner from "./components/Banner"
import Movies from "./components/Movies"
import Navbar from "./components/Navbar"
import Favorites from "./components/Favorites"

import PageNotFound from "./components/PageNotFound"

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <Banner></Banner>
            <Movies></Movies>
           
          </>
        }></Route>

        <Route path="/favorites" element={
          <>
          <Favorites>

          </Favorites>
          </>
        }></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>

      </Routes>



    </>
  )
}

export default App
