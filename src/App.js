import React from 'react';
import './styles/global';
import { Provider } from 'react-redux';
import store from './store';
import Map from './components/Map';

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;
