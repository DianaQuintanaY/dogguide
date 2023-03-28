import './App.css';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav'
import { Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/'? <Nav/> : <></>}
      <Route path='/' exact component={Landing} />
      <Route path='/home' component={Home} />
      <Route path='/detail/:id' component={Detail} />
      <Route path='/create' component={Form} />
    </div>)
}

export default App;
