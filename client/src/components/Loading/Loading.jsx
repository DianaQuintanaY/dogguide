import './loading.css'
const Loading = () => {
 // const url = "https://i0.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1";
  const url = "https://bestanimations.com/media/dogs/993632891dalmation-illustration-gif.gif";
  return(
    <div className="loading">
      <img src={url} alt="loading"/>
    </div>
  )
};

export default Loading