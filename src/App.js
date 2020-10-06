import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Component/Register/Register';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import VolunteerList from './Component/Register/VolunteerList/VolunteerList';


export const UserContext = createContext(); 
function App() {
  const [logInUser, setLogInUser] = useState({});
  return (
    <UserContext.Provider value={[logInUser, setLogInUser]}>      
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/list">
            <VolunteerList></VolunteerList>
          </Route>
          <PrivateRoute path="/register/:title">
            <Register></Register>
          </PrivateRoute>
          <Route path="/">
              <Home/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>      
    
  );
}

export default App;
