import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './styles/index.css';

import HomePage from './pages/homepage';
import SinglePage from './pages/singlepage';

class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/:id" component={SinglePage} />
                </div>
            </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
