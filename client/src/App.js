import './App.css';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav'
import { Route, Switch, useLocation} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/'? <Nav/> : <></>}
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/home' component={Home} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/create' component={Form} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>)
}

export default App;
