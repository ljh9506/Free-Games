import { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const App = ():ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App;
