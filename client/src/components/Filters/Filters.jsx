import MultiList from "../MultiList/MultiList";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { getRefreshPagination } from "../../redux/actions";
import Loading from "../Loading/Loading";
import './filters.css'

const Filters = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {filters} = useSelector((state) => state.infoPagination);

  const [formData, setFormData] = useState({
    characteristics: '' ,
    origin: 'all',
    ordenBy: '',
    temperaments: []
  });
  
  useEffect(
    () => {
      setFormData( !filters? 
        formData : 
        {...formData, 
          characteristics: filters.characteristics? filters.characteristics : '', 
          origin: filters.origin? filters.origin : '' , 
          ordenBy: filters.ordenBy? filters.ordenBy : '' , 
        })},[filters]
  )

  const setInFormTemperaments = (temps) => {
    setFormData({...formData, temperaments: temps})
  };

  const setInfoRadios = ({target}) => {
    const name = target.name;
    const value = target.value;
    setFormData({...formData, [name]:value})
  };
  const onSubmitFilter = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(getRefreshPagination({filters:formData}));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

return (
  <div className="filtros">
    {isLoading && <Loading/>}
    <form onSubmit={onSubmitFilter} className="filters">
      <div>
        <label className="bold">Order by:</label>
        <select name="characteristics" value={formData.characteristics} onChange={setInfoRadios}>
          <option value="">-- Select --</option>
          <option value="alphabetic">Alphabetic</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <div>
        <label className="bold">Data Source:</label>
        <select name="origin" value={formData.origin} onChange={setInfoRadios}>
          <option value="">-- Select --</option>
          <option value="database">Database</option>
          <option value="api">API</option>
          <option value="all">All</option>
        </select>
      </div>

      <div>
        <label className="bold">Order:</label>
        <select name="ordenBy" value={formData.ordenBy} onChange={setInfoRadios}>
          <option value="">-- Select --</option>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      <div className="multi">
        <label className="bold">Temperaments:</label>
        <MultiList setInFormTemperaments={setInFormTemperaments}  key={JSON.stringify(filters?.temperaments)} keepTemperaments = {filters? filters.temperaments : [] } />
      </div>

      <button type="submit">FILTER</button>
    </form>

    {
      <div className="labels"> 
        <p id="chosen">Selected temperaments:</p> 
        {formData.temperaments.length? formData.temperaments.map(temp => <label key={temp}> {temp} </label>) : <p>No temperament has been selected</p>}
      </div>}
</div>
)
}

export default Filters