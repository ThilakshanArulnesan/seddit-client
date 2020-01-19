import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginAndRegistration from './components/Login/Login';

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
          <Route path='/login'>
            <LoginAndRegistration />
          </Route>
          <Route path='/users'>
            <LoginAndRegistration />
          </Route>
          <Route path='/'></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
