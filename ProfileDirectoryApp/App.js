import React from 'react';
import { Provider } from 'react-redux';

// Redux State Management
import Store from './src/store/Store';

// React Native Navigator
import AppContainer from './src/navigation/AppContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    );
  };
};