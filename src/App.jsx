import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"
import Footer from "./components/Oauth"
import Profile from "./pages/Profile"
import Create from "./pages/CreateListing"
import PrivateRoute from "./components/privateRoute"
import UpdateListing from './pages/UpdateListing';
import Listing from "./pages/Listing"
import Search from "./pages/Search"
function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path='/search' element={<Search />} />
          <Route path='/listing/:listingId' element={<Listing />} />
          <Route element={<PrivateRoute/>}>
             <Route path="/profile" element={<Profile/>}/>
             <Route path="/create-listing" element={<Create/>}/>
             <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />

          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
