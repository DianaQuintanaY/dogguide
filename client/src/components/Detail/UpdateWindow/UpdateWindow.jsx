import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {validate} from "../../validation";
import { updateCharacters } from "../../../redux/actions";
import MultiList from "../../MultiList/MultiList";
import "./updateWindow.css";


const UpdateWindow = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ 
    name: '', 
    image: '',
    heightMin: 0,
    heightMax: 0,
    weightMin:0,
    weightMax:0,
    life_span:0,
    temperaments:[],
  });
  const [errors, setErrors] = useState({ 
    name: '', 
    image: '',
    heightMin: '',
    heightMax: '',
    weightMin:'',
    weightMax:'',
    life_span:'',
    temperaments:'',
  });
  const handleInputChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
    setErrors(validate({...formData}))
  };

  useEffect(() =>{
    setFormData(formData);
    setErrors(validate(formData));
  }, [formData]);

  const handleSubmit = (event) => {
    if(Object.keys(errors).length === 0){
      event.preventDefault();
      dispatch(updateCharacters(props.id, formData));
      props.successWindow();
    } else {
      window.alert('Completar Errores')
    }
  };

  const setInFormTemperaments = (temps) => {
    setFormData({...formData, temperaments: temps})
  };


  return(
      <form className="update" onSubmit={handleSubmit}>
        <h3>UPDATE DOG:</h3>
        <label>Name of Breeds: </label>
        <input name="name" type="text" value={formData.name} onChange={handleInputChange}></input>
        {errors.name? <p>{errors.name}</p> : <p> </p>}
      
        <label>Image: </label>
        <input name="image" type="text" value={formData.image} onChange={handleInputChange}></input>
        {errors.image? <p>{errors.image}</p> : <p> </p>}
      
        <label>Height: </label>
        <br/>
        <label>min: </label>
        <input className = "number" name="heightMin" type="number" value={formData.heightMin} onChange={handleInputChange}></input>
        <span> cm</span>
        <label>  -  max: </label>
        <input className = "number" name="heightMax" type="number" value={formData.heightMax} onChange={handleInputChange}></input>
        <span> cm</span>
        {errors.heightMin? <p>{errors.heightMin}</p> : errors.heightMax? <p>{errors.heightMax}</p> : <p> </p>}

        <label>Weight:</label>
        <br/>
        <label>min: </label>
        <input className = "number" name="weightMin" type="number" value={formData.weightMin} onChange={handleInputChange}></input>
        <span> kg</span>
        <label>  -  max: </label>
        <input className = "number" name="weightMax" type="number" value={formData.weightMax} onChange={handleInputChange}></input>
        <span> kg</span>
        {errors.weightMin? <p>{errors.weightMin}</p>: errors.weightMax? <p>{errors.weightMax}</p>: <p> </p>}

        <label>Life span: </label>
        <input className = "number" name="life_span" type="number" value={formData.life_span} onChange={handleInputChange} ></input>
        {errors.life_span? <p>{errors.life_span}</p>  : <p> </p>}

        <label>Temperaments: </label>
        <div className="updateLabels"> 
          {formData.temperaments.length? formData.temperaments.map(temp => <label key={temp}> {temp} </label>) : <p>No temperament has been selected</p>}
        </div>
        <MultiList setInFormTemperaments={setInFormTemperaments} />
        <br/>
        <button  type="button" onClick={props.onCloseWindow}>CLOSE</button>
        <button type="submit">SUBMIT</button>
      </form>
  )

};

export default UpdateWindow