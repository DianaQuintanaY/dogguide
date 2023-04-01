import { useHistory } from "react-router-dom";
import {useState} from "react";
import './landing.css'
export default function Landing(){
  const infoLanding = [
    {
      img: "https://images.pexels.com/photos/3198005/pexels-photo-3198005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text:"Here you can find detailed information about different dog breeds, search for some of their characteristics and you can also add new breeds to the list."
    },
    {
      img: "https://images.pexels.com/photos/2827238/pexels-photo-2827238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text:"If you are looking for a furry friend to be part of your family, we want to remind you that there are many abandoned dogs that are waiting to find a loving home."
    },
    {
      img: "https://images.pexels.com/photos/3198012/pexels-photo-3198012.jpeg",
      text:"Don't worry so much about the breed, the important thing is that you find a dog that fits well with your lifestyle and personality."
    },
    {
      img: "https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg",
      text:"We invite you to learn more about dogs and their characteristics through this platform. Remember: Don't buy, better adopt!"
    },
  ];

  const [state, setState]= useState(0);
  const history = useHistory();
  const redirectToHome = () => {
    history.push('/home');
  };
  const changeSearch = (e) => {
    setState(Number(e.target.value));
  };

  const changeImage = (e) => {
    const value = e.target.textContent;
    if(value === ">" && state !== 3){
      setState(state+1)
    }
    if(value === "<" && state !== 0){
      setState(state-1)
    }
  }

  return (
    <div className="landing">
      <div className="content">
        <h1>Welcome to this interactive platform!</h1>
        <button onClick={redirectToHome}>HOME</button>
        <p className="author">by: Diana Quintana</p>
      </div>

      <div className="imageLanding">
        <div className="radioLanding">
          {[0,1,2,3].map(item => <input type="radio" key={item} value={item} name="button" checked={item === state} onChange={changeSearch}></input>)}
        </div>
        <img  alt="state" src={infoLanding[state].img}/>
        <p>{infoLanding[state].text}</p>
        {state !==0 && <label  className="manageLeft" onClick={changeImage}>{"<"}</label>}
        {state !==3 &&<label  className="manageRight" onClick={changeImage}>{">"}</label>}
      </div>

    </div>
  )
}