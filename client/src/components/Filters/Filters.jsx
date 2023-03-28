import MultiList from "../MultiList/MultiList";
import { useState } from "react";
import { getRefreshPagination } from "../../redux/actions";
import { useDispatch } from "react-redux";
import './filters.css'

const Filters = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ 
    characteristics:'',
    origin:'all',
    ordenBy:'',
    temperaments:[] 
  });
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
    dispatch(getRefreshPagination({filters:formData}))
  }

return (
  <div className="filtros">
  <form onSubmit={onSubmitFilter} className="filters">
  <div>
  <label className="bold">Characteristics:</label>
  <input type="radio" value="alphabetic" name="characteristics" checked={formData.characteristics === 'alphabetic'} onChange={setInfoRadios}/><label>alphabetic</label>
  <input type="radio" value="weight" name="characteristics" checked={formData.characteristics === 'weight'} onChange={setInfoRadios}/><label>weight</label>
  </div>
  <div>
  <label className="bold">Origin:</label>
  <input type="radio" value="database" name="origin"  checked={formData.origin === 'database'} onChange={setInfoRadios}/><label>database</label>
  <input type="radio" value="api" name="origin"  checked={formData.origin === 'api'} onChange={setInfoRadios}/><label>api</label>
  <input type="radio" value="all" name="origin"  checked={formData.origin === 'all'} onChange={setInfoRadios}/><label>all</label>
  </div>
  <div>
  <label className="bold">Order by:</label>
  <input type="radio" value="ASC" name="ordenBy" checked={formData.ordenBy === 'ASC'} onChange={setInfoRadios}/><label>ASC</label>
  <input type="radio" value="DESC" name="ordenBy" checked={formData.ordenBy === 'DESC'} onChange={setInfoRadios}/><label>DESC</label>
  </div>
  <label className="bold">Temperaments:</label>
  <MultiList setInFormTemperaments={setInFormTemperaments} />
  <br/>
  <button type="submit">FILTER</button>
</form>
  <div> <p id="chosen">Chosen temperaments:</p>
  <div className="labels">
   {formData.temperaments.map(temp => <label> {temp} </label>)}
  </div>
  </div>
</div>
)
}

export default Filters