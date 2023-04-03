import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cleanError } from "../../redux/actions";
import './errors.css'

const Errors = ({response, message}) => {
  const dispatch = useDispatch();
  const clean = () => {
    dispatch(cleanError())
  }
  
  return (
    <div className="err">
      <h2>ERROR {response.status}</h2>
      <p>{message}</p>
      <Link to="/" onClick={clean} >Back to start</Link>
    </div>
  );
}

export default Errors