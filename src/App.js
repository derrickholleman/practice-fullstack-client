import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Users from "./Users";
import Home from "./Home";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route path="/users/:userId">
        <User />
      </Route>

      <Route path="*">
        <h1 style={{color: "red"}}>Page Not Found</h1>
        <Link to='/'>Back Home</Link>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
