import './window.css';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const WindowDetail = (props) => {
  const history = useHistory();
  const id = useSelector(state => state.recentlyCreated);
  const redirectToDetail = () => {
    history.push(`/detail/${id}`);
  };
  return(
    <div className='windowDetail'>
      <h1>Successfully Created</h1>
      <div className="manageButton">
      <button  id="red" onClick={props.onCloseWindow} >Close</button>
      <button id="green" onClick={redirectToDetail}>View</button>
      </div>
    </div>
  )

};

export default WindowDetail