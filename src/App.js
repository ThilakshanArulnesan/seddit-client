import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;
