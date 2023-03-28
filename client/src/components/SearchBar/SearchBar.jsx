import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharactersByName } from "../../redux/actions";
import './searchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState('');
   const onChange = (e) =>{
      const value = e.target.value;
      setState(value);
   };
   const onClick = () => {
      dispatch(getCharactersByName(state))
   };
  return(
    <div>
      <input onChange={onChange} type='search' placeholder="Search by Breeds"/>
      <button className="searchbar" onClick={onClick}>SEARCH</button>
    </div>
  )
};
export default SearchBar