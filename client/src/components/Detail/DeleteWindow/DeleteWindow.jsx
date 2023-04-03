import './deleteWindow.css';
import { deleteCharacters } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const DeleteWindow = (props) => {
  const dispatch = useDispatch();
  const deleteOnClick = () => {
    dispatch(deleteCharacters(props.id));
    props.successWindow();
  };
  return(
    <div className='windowDetail'>
      <h1>Are you sure to Delete this Element? </h1>
      <div className="manageButton">
      <button  id="red" onClick={props.onCloseWindow} >NO</button>
      <button id="green" onClick={deleteOnClick}>YES</button>
      </div>
    </div>
  )

};

export default DeleteWindow