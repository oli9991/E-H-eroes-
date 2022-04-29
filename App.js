import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/Home';
import Start from './pages/Start';
import {
  useFonts,
  Outfit_400Regular,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_500Medium,
} from '@expo-google-fonts/outfit';

import {
  useFonts as useFraunces,
  Fraunces_700Bold,
  Fraunces_600SemiBold,
} from '@expo-google-fonts/fraunces';
import * as Font from 'expo-font';
import Register from './pages/Register';
import Login from './pages/Login';
import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { View, Text } from 'react-native';
import theme from './style.js';

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded, setLoaded] = useState(false);
  //   let [_] = useFraunces({
  //     Fraunces_700Bold,
  //     Fraunces_600SemiBold,
  //   });

  //   let [outfit] = useFonts({
  //     Outfit_400Regular,
  //     Outfit_600SemiBold,
  //     Outfit_500Medium,
  //     Outfit_700Bold,
  //   });

  const customFonts = {
    Fraunces_700Bold,
    Fraunces_600SemiBold,
    Outfit_400Regular,
    Outfit_600SemiBold,
    Outfit_500Medium,
    Outfit_700Bold,
  };

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts).then(() => setLoaded(true));
  };

  loadFontsAsync();

  if (!fontsLoaded) {
    return (
      <View>
        {/* <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#ffffff',
          }}
          source={require('./assets/loading.json')}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        /> */}
        <Text style={theme.Title}>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen
          name='Start'
          component={Start}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ffffff',
              border: 'none',
            },
            headerShadowVisible: false, // applied here
          }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ffffff',
              border: 'none',
            },
            headerShadowVisible: false, // applied here
          }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#ffffff',
              border: 'none',
            },
            headerShadowVisible: false, // applied here
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
