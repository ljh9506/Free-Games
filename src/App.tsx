import { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
