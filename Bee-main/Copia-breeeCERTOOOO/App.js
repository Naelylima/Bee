import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {app} from  './pages/firebaseConfig'

import Routers from './routers';

export default function App() {
  return (
    <Routers/>
  )
}

