import {NavLink} from "react-router-dom";
import './nav.css'

const Nav = (props) => {
  return(
    <nav className="nav">
      <ul >
        <li><NavLink className="navText" to='/'>Logout</NavLink></li>
        <li><NavLink className="navText" activeClassName="navActive" to='/home'>Home</NavLink></li>
        <li><NavLink className="navText" activeClassName="navActive" to='/create'>Create</NavLink></li>
      </ul>
    </nav>
  )
};

export default Nav