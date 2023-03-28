import Card from "../Card/Card";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import {getCharacters} from "../../redux/actions";
import './cards.css';

const Cards = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() =>{
    dispatch(getCharacters())
  }, [dispatch])
  
  return(
    <div className="cards">
        {characters.map((char)=>{
          return(
            <Card
            key = {char?.id}
            id = {char?.id}
            name = {char?.name}
            temperaments = {char?.temperaments}
            weight = {char?.weight}
            image = {char?.image}
            />
           
          )
        })
      }

    </div>
  )



};

export default Cards