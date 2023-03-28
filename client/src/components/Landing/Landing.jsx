import { useHistory } from "react-router-dom";
import './landing.css'
export default function Landing(){
  const history = useHistory();
  const redirectToHome = () => {
    history.push('/home');
  };
  return (
    <div className="landing">
      <img  alt="" src="https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg"/>
      <div className='text'>
      <h1>¡Bienvenido a esta plataforma interactiva!</h1>
      <p>
         Aquí podrás encontrar información detallada sobre distintas razas de perros, 
         buscar por algunas de sus características y también puedes añadir nuevas razas a la lista.
          <br/>          
          Si estás buscando un amigo peludo para que forme parte de tu familia, queremos recordarte que hay muchos perros en situación de abandono
          que están esperando encontrar un hogar amoroso.
          <br/>
          No te preocupes tanto por la raza, lo importante es que encuentres un perro que se adapte bien a tu estilo de vida y personalidad.
          <br/> 
          Te invitamos a conocer más sobre los perros y sus características a través de esta plataforma. 
          <br/>
          Recuerda: ¡No compres, mejor adopta!
      </p>
      </div>
      <button onClick={redirectToHome}>►</button>
      <p className="author">by: Diana Quintana</p>
    </div>
  )

}