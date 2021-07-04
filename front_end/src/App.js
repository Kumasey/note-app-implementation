import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NoteDetails from './NoteDetails';
import EditNote from './EditNote';
import Users from './container/users';
import Todo from './container/todo';
import Foods from './container/food';
import Food from './container/FoodDetails';
import Homes from './containers/Home';
import About from './containers/About';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Page404 from './containers/Page404';
import Register from './containers/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Homes} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/notes/:id" component={NoteDetails} />
        <Route path="/edit/:id" component={EditNote} />
        <Route path="/user-data" component={Users} />
        <Route path="/todos" component={Todo} />
        <Route path="/food-items" component={Foods} />
        <Route path="/food/:id" component={Food} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
