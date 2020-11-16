import React from 'react';
// Components and Pages
import Home from './pages/Home';
import Nav from './components/SearchNav';
// style
import GlobalStyles from './components/GlobalStyles';
// router
import {Route} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav/>
      <Route path={['/games/:id', '/']} >
        <Home />
      </Route>
    </div>
  );
}

export default App;
