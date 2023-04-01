import Card from "../Card/Card";
import {useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import {getCharacters} from "../../redux/actions";
import Loading from "../Loading/Loading";
import './cards.css';

const Cards = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() =>{
    setIsLoading(true);
    dispatch(getCharacters());
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [dispatch])
  
  return(
    <div className="cards">
      {isLoading && <Loading/>}

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