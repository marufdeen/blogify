import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';


import Header from './components/partials/Header';
import Home from './components/Home';
import JoinUs from './components/JoinUs';
import Dashboard from './components/auth/Dashboard'

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token to get user info and expiration
    const decoded = jwtDecode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expiration
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Redirect
        window.location.href = '/join';
    }
}
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/join' component={JoinUs} />
                        <Route exact path='/dashboard' component={Dashboard} />
                    </div>
                </Router>
            </Provider>
        );
    }
}
reactDom.render(<App />, document.getElementById('app'));