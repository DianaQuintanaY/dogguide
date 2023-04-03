import {NavLink} from "react-router-dom";
import './nav.css';
import {getCharacters} from "../../redux/actions";
import {useDispatch} from "react-redux";

const Nav = (props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(getCharacters());
  }

  return(
    <nav className="nav">
      <ul >
        <li><NavLink className="navText" to='/' onClick={onClick}>Landing</NavLink></li>
        <li><NavLink className="navText" activeClassName="navActive" to='/home' onClick={onClick}>Home</NavLink></li>
        <li><NavLink className="navText" activeClassName="navActive" to='/create' onClick={onClick}>Create</NavLink></li>
      </ul>
    </nav>
  )
};

export default Nav