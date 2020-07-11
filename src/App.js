import React from 'react';

import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';


function App() {
  return (
      <> 
        <Header currentPage="Main"/>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Products} />
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;