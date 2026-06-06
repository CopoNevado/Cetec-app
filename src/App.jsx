import {Routes,Route}
from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Favorites from "./pages/Favourites"
import NotFound from "./pages/NotFound"

function App(){

return(

<>

<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/detail/:id"
element={<Detail/>}
/>

<Route
path="/favorites"
element={<Favorites/>}
/>

<Route
path="*"
element={<NotFound/>}
/>

</Routes>

<Footer/>

</>

)

}

export default App