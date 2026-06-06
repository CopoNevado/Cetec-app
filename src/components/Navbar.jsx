import {Link} from "react-router-dom"

function Navbar(){

return(

<nav className="navbar">

<h2>CharacterVerse</h2>

<div>

<Link to="/">Inicio</Link>

<Link to="/favorites">
Favoritos
</Link>

</div>

</nav>

)

}

export default Navbar