import React from 'react';
import 'react-native-gesture-handler';
import {AppearanceProvider} from 'react-native-appearance';
import {ThemeProvider} from './ThemeProvider';
import {Provider} from 'mobx-react';
import {AppContainer} from './navigator';
import axios from 'axios';
import SampleStore from '../modules/store/store.example';

axios.defaults.baseURL = 'http://127.0.0.1:8000';
//axios.defaults.headers.common['Authorization'] = '';
const sample = new SampleStore();

export default class App extends React.Component {
  render() {
    return (
      <AppearanceProvider>
        <ThemeProvider>
          <Provider SampleStore={sample}>
            <AppContainer />
          </Provider>
        </ThemeProvider>
      </AppearanceProvider>
    );
  }
}
