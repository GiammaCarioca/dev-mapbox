import React, { Fragment } from 'react';
import './styles/global';
import { Provider } from 'react-redux';
import './config/reactotron';
import store from './store';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Map />
      <Sidebar />
    </Fragment>
  </Provider>
);

export default App;
