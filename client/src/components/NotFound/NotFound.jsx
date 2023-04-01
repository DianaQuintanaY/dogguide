import { Link } from "react-router-dom";
import './notFound.css'

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Back to start</Link>
    </div>
  );
}

export default NotFound