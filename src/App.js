import React from 'react';
import EmployeePage from './components/Page/EmployeePage.js';
import DepartmentPage from './components/Page/DepartmentPage.js';
import Home from './components/Home.js';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Authenticate/Login.js'
import PrivateRoute from './components/Tool/PrivateRoute.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/employee' component={EmployeePage} />
        <PrivateRoute path='/department' component={DepartmentPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
