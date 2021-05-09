import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NoteDetails from './NoteDetails';
import EditNote from './EditNote';
import Users from './container/users';
import Todo from './container/todo';


const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/notes/:id' component={NoteDetails} />
                <Route path='/edit/:id' component={EditNote} />
                <Route path='/user-data' component={Users} />
                <Route path='/todos' component={Todo} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;