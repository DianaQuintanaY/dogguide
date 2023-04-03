import { useState, useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import { getCharactersByName } from "../../redux/actions";
import Loading from "../Loading/Loading";
import './searchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState('');
  const {filters} = useSelector((state) => state.infoPagination);
  
  useEffect(
    () => {
      setState( filters?  filters.name? filters.name : '' : '' )},[filters]
  )

   const onChange = (e) =>{
      const value = e.target.value;
      setState(value);
   };
   const onClick = () => {
    setIsLoading(true);
    dispatch(getCharactersByName(state));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
   };
  return(
    <div className="searchbar">
      {isLoading && <Loading/>}
      <input className="searchbarInput" onChange={onChange} type='search' placeholder="Search by Breeds"/>
      <button className="searchbarButton" onClick={onClick}>SEARCH</button>
    </div>
  )
};
export default SearchBar