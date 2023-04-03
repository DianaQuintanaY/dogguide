import { useHistory } from "react-router-dom";
import { characterDetail, cleanDetail } from "../../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./detail.css";
import DeleteWindow from "./DeleteWindow/DeleteWindow";
import UpdateWindow from "./UpdateWindow/UpdateWindow";
import SuccessWindow from "./SuccessWindow/SucessWindow";

const CharacterDetail = () => {
  
  const dispatch = useDispatch();
   const {id} = useParams();
   const detail = useSelector(state => state.characterDetail);
   const [deleteState, setDeleteState] = useState(false);
   const [updateState, setUpdateState] = useState(false);
   const [successState, setSuccessState] = useState(false);

   const history = useHistory();
  const redirectToBack = () => {
    history.push('/home');
  };
   useEffect(()=>{
    dispatch(characterDetail(id));
    return () => dispatch(cleanDetail())
   }, [dispatch,id])

   const showDeleteWindow = () => {
    setDeleteState(!deleteState)
   };

   const showUpdateWindow = () => {
    setUpdateState(!updateState)
   };

   const onCloseWindow = () => {
    setDeleteState(false);
    setUpdateState(false);
   }

   const successWindow = () => {
    setDeleteState(false);
    setUpdateState(false);
    setSuccessState(true)
   }

  return(
    <div className="detail">
      <img src={detail?.image} alt=""/>
      <div className="detailText">
      <h1><b>ID:</b> {detail?.id}</h1>
      <h1><b>Name:</b> {detail?.name}</h1>
      <h1><b>Height:</b> {detail?.height} cm</h1>
      <h1><b>Weight:</b> {detail?.weight} kg</h1>
      <h1><b>Temperaments:</b> {detail?.temperaments}</h1>
      <h1><b>Life Span:</b> {detail?.life_span}</h1>
      <h1 className="back" onClick={redirectToBack}>
      ◄◄
      </h1>
      {isNaN(Number(detail.id))&& 
      <div>
        <button onClick={showDeleteWindow}>DELETE</button>
        <button onClick={showUpdateWindow}>UPDATE</button>
      </div>}
      </div>
      {deleteState && <DeleteWindow id={detail.id} onCloseWindow={onCloseWindow} successWindow={successWindow}/>}
      {updateState && <UpdateWindow id={detail.id} onCloseWindow={onCloseWindow} successWindow={successWindow}/>}
      {successState && <SuccessWindow />}
    </div>
  )
};

export default CharacterDetail