import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDSojpbgA5XB-Ahg93tfmUQSt9OX2w9m88',
      authDomain: 'auth-45f73.firebaseapp.com',
      databaseURL: 'https://auth-45f73.firebaseio.com',
      projectId: 'auth-45f73',
      storageBucket: 'auth-45f73.appspot.com',
      messagingSenderId: '914690743286'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
