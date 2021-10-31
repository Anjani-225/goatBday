import './App.css';
import { Link } from 'react-router-dom';
import { Route,Switch,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Dipshit from './components/Dipshit';
import Nani from './components/Nani';
import Panda from './components/Panda';
import Rac from './components/Rac';
import Hemang from './components/Hemang';
import Dhruv from './components/Dhruv';
import Naman from './components/Naman';
import Stitch from './components/Stitch';
import Akan from './components/Akan';

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route exact path = "/">
           <Home />
        </Route>

        <Route path = "/Nani">
          <Nani />
        </Route>

        <Route path = "/Dipshit">
          <Dipshit />
        </Route>

        <Route path = "/Rac">
          <Rac />
        </Route>

        <Route path = "/Panda">
          <Panda />
        </Route>

        <Route path = "/Hemang">
          <Hemang />
        </Route>

        <Route path = "/Dhruv">
          <Dhruv />
        </Route>

        <Route path = "/Naman">
          <Naman />
        </Route>

        <Route path = "/Stitch">
          <Stitch />
        </Route>

        <Route path = "/Akan">
          <Akan />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
