import { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/game" exact>
            <Home />
          </Route>
          <Route path="/game/:id">
            <Detail />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
