import { Link } from "react-router-dom";
import './errors.css'

const Errors = ({status, message}) => {
  return (
    <div className="err">
      <h2>ERROR {status}</h2>
      <p>{message}</p>
      <Link to="/">Back to start</Link>
    </div>
  );
}

export default Errors