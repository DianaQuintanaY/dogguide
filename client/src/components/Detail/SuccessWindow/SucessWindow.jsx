import './successWindow.css';
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux'

const SuccessWindow = (props) => {
  const error = useSelector(state => state.error);
  const history = useHistory();
  const redirectToDetail = () => {
    history.push(`/home`);
  };
  return(
    <div className='successDetail'>
      { error.message? <h1>Wait ...</h1>: <h1>Successfully </h1>}
      <div className="manageButton">
      <button id="pink" onClick={redirectToDetail}> BACK TO HOME</button>
      </div>
    </div>
  )

};

export default SuccessWindow