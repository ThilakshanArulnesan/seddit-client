import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import Main from "./components/MainPage/Main";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>

          <Route path="/users">
            <Login />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
