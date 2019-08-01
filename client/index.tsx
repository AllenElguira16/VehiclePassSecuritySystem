import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Axios from 'axios';


Axios.defaults.baseURL = 'http://192.168.100.5:8000/api';
Axios.defaults.withCredentials = true;

AppRegistry.registerComponent(appName, () => App);