import React from 'react';
import Home from './home';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import FormPage from './Form';
import List from './List';
import showData from './showData';

class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/form" component={FormPage} />
                <Route exact path="/list" component={List} />
                <Route exact path="/showData" component={showData} />
            </div>
        )
    }
};

export default App;