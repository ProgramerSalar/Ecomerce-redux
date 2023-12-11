

import React from 'react';
import { Text, View } from 'react-native';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export const App = () => {
  return(

    <Provider store={store}>
    <Main />

    </Provider>
  )
  
}
