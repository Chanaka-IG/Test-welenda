
import UserRegistration from './components/User_resistration';
import UserProfile from './components/User_profile';
import Topbar from './components/Topbar'
import Home from './pages/Home';
import Login from './pages/Login';
import Message from './pages/Message';
import Search from './pages/Search';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
function App() {
  return (
   <>

    <Router>
     <Topbar />
      <Switch>
          <Route path = "/" exact component={Login} />
          <Route path = "/Login" exact component={Login} />
          <Route path = "/Home" component={Home} />
          <Route path = "/User_resistration" component={UserRegistration} />
          <Route path = "/User_profile" component={UserProfile} />
          <Route path = "/Message" component={Message} />
          <Route path = "/Search" component={Search} />
        
         
      </Switch>

    </Router>  
     
  </> 
 
  );
}

export default App;
