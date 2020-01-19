import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;
