import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import TeamDetail from './component/TeamDetail/TeamDetail';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/explore/:idTeam">
         <TeamDetail/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
