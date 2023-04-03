import './multiList.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getTemperaments} from "../../redux/actions";



const MultiList = (props) =>{
  const dispatch = useDispatch();
  const allTemperaments = useSelector(state => state.allTemperaments);
  const [allTemps, setAllTemps] = useState(allTemperaments.map((item)=> {return{...item, isChecked: false }}));
  const [searchValue, setSearchValue] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    dispatch(getTemperaments);
  }, []);

  useEffect(() => {
    const all = allTemperaments.map((item)=> {return{...item, 
      isChecked: props.keepTemperaments? props.keepTemperaments.length?  props.keepTemperaments.includes(item.name)  : false : false }});
    setAllTemps(all)
  }, [allTemperaments]);

  useEffect(() => {
    props.setInFormTemperaments(allTemps.filter(temp=> temp.isChecked).map(el => el.name));
  }, [allTemps]);

  useEffect(()=>{
    if(allChecked){
      setAllTemps([...allTemps].map((temp)=>{ return {...temp, isChecked:true}}))
    }else{
      setAllTemps([...allTemps].map((temp)=>{ return {...temp, isChecked:false}}))
    }
  },[allChecked])

  const changeIsChecked = ({target}) => {
    const name = target.name;
    const newTemps = [...allTemps].map((item)=>  item.name === name? {...item, isChecked:!item.isChecked} : item);
    setAllTemps(newTemps)
  };

  const changeSearchValue = ({target}) => {
    const value =  target.value? target.value.toLowerCase(): '';
    setSearchValue(value);
    
  };

  const changeExpanded = () => {
    setExpanded(!expanded)
  };

  const changeCheckedAll = () => {
    setAllChecked(!allChecked)
  };

  const filterName = allTemps.filter(temp => temp.name.toLowerCase().includes(searchValue))
  return(
    <div className="multiselect">
    <div className="selectBox">
      <input className="inputselect" type="search" placeholder="Search temperaments" onChange={changeSearchValue}  value={searchValue}/>
      <label className="select" onClick={changeExpanded}>▼</label>
    </div>
    {expanded && (<div id="checkboxes" >
      <label><input type="checkbox" name='All' checked={allChecked} onChange={changeCheckedAll}/>All Temperaments</label>
      {filterName.map(temp => <label key={temp.id} >
        <input type="checkbox" name={temp.name} checked={temp.isChecked} onChange={changeIsChecked}/>{temp.name}</label>)}
    </div>)}
  </div>
    
  )
};

export default MultiList