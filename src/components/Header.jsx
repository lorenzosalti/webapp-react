import { NavLink } from "react-router-dom"

function Header() {

  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Home Page</NavLink></li>
        <li><NavLink to='/movies'>Movies</NavLink></li>
      </ul>
    </nav>
  )

}


export default Header