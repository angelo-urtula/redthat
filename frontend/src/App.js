import './App.css';
import { useState, useEffect } from "react"
import {Switch, Route} from "react-router-dom"
import UsersContainer from "./containers/UsersContainer.js"
import PostsContainer from "./containers/PostsContainer.js"
import Login from "./components/Login.js"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9292/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          REDTHAT
         </h1>
      </header>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/posts" component={PostsContainer}/>
      <Route exact path="/users" component={UsersContainer}/>
      <Route exact path="/login">
      <Login onLogin={handleLogin} />
    </Route>
      </Switch>
    </div>
  );
}

export default App;
