import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import UserProfile from './UserProfile';
import NewUser from './NewUser';
import NoMatch from './NoMatch'

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
      <Switch>
        
        <Route path="/user/new">
          <NewUser/>
        </Route>
        
        <Route path="/user/:userId">
          <UserProfile/>
        </Route>
        
        <Route>
          <NoMatch/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
