import { NavLink } from "react-router-dom"

function Header() {

  return (
    <header className="mb-2">
      <nav className="p-2">
        <ul>
          <li><NavLink to='/'>Home Page</NavLink></li>
          <li><NavLink to='/movies'>Movies</NavLink></li>
        </ul>
      </nav>
    </header>
  )

}


export default Header