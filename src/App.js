import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyProfile from './MyProfile'
import UserProfile from './UserProfile'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/my-profile">My profile</Link></li>
            <li><Link to="/user-profile/Victorafx">Victor</Link></li>
            <li><Link to="/user-profile/BrianL">BrianL</Link></li>
            <li><Link to="/user-profile/VictorV">VictorV</Link></li>
            <li><Link to="/user-profile/MartinG">MartinG</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/user-profile/:githubLogin" component={UserProfile}/>
          <Route path="/my-profile" component={MyProfile}/>
          <Route exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}

