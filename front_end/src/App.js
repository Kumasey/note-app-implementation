import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NoteDetails from './NoteDetails'
import EditNote from './EditNote'

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/notes/:id' component={NoteDetails} />
                <Route path='/edit/:id' component={EditNote} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;