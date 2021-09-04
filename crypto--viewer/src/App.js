import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Chart from './components/Chart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Main} />
        <Route exact path='/crypto/:id' component={Chart} />
      </BrowserRouter>
    </div>
  );
};

export default App;
