// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoaderScreen from './src/screens/auth/Loading';
import Signin from './src/screens/auth/Signin';
import Home from './src/screens/landingpage/Home';
import Signup from './src/screens/auth/Signup';
import OTPVerify from './src/screens/auth/OTPVerify';
import Location from './src/screens/auth/Location';
import SigninSuccess from './src/screens/auth/SigninSuccess';
import Search from './src/screens/landingpage/Search';
import SearchResult from './src/screens/landingpage/SearchResult';
import Details from './src/screens/landingpage/Details';
import {Provider} from 'react-redux';
import store from './src/store/store';
import CartScreen from './src/screens/landingpage/CartScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoaderScreen" component={LoaderScreen} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="OTPVerify" component={OTPVerify} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="SigninSuccess" component={SigninSuccess} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="SearchResult" component={SearchResult} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

// ./gradlew assembleRelease
// ./gradlew clean
