import "./card.css";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();
  const redirectToDetail = () => {
    if(props.id) history.push(`/detail/${props.id}`);
  };
  return(
    <div className="card"  onClick={redirectToDetail}>
      <img src={props.image} alt=""/>
      <h2 className ="cardName">{props.name}</h2>
      <h2>{props.temperaments}</h2>
      <h2>{props.weight}</h2>
    </div>
  )
};

export default Card