import { useHistory } from "react-router-dom";
import { characterDetail, cleanDetail } from "../../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./detail.css"

const CharacterDetail = () => {
  
  const dispatch = useDispatch();
   const {id} = useParams();
   const detail = useSelector(state => state.characterDetail);

   const history = useHistory();
  const redirectToBack = () => {
    history.push('/home');
  };
   useEffect(()=>{
    dispatch(characterDetail(id));
    return () => dispatch(cleanDetail())
   }, [dispatch,id])

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
      </div>
    </div>
  )
};

export default CharacterDetail