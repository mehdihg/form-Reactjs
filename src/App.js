import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Redirect, Route, Switch } from "react-router";


function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
