import './windowCompleteErr.css';


const WindowCompleteErr = (props) => {
 
  return(
    <div className='windowComplete'>
      <h1>Complete Errors</h1>
      <div className="manageButton">
      <button  id="red" onClick={props.onCloseWindowErr} >Close</button>
      </div>
    </div>
  )

};

export default WindowCompleteErr