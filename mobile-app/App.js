import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useContext, useEffect, useState, useRef } from 'react';
import SideMenu from './components/Menu';
import AddAnnouncement from './pages/AddAnnouncement';
import Announcement from './pages/Announcement';
import Announcements from './pages/Announcements';
import Donations from './pages/Donations';
import HomeScreen from './pages/Home';
import Login from './pages/Login';
import Appoitment from './pages/process/Appoitment';
import Form1 from './pages/process/Form1';
import Form2 from './pages/process/Form2';
import Form3 from './pages/process/Form3';
import Form4 from './pages/process/Form4';
import Form5 from './pages/process/Form5';
import Form6 from './pages/process/Form6';
import Register from './pages/Register';
import Start from './pages/Start';
import {
  AuthenticatedUserContext,
  AuthenticatedUserProvider,
} from './providers';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { db } from './utils/firebase';
import { collection, doc, onSnapshot, query } from 'firebase/firestore/lite';

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { user } = useContext(AuthenticatedUserContext);

  const customFonts = {
    Fraunces_SemiBold: require('./assets/fonts/Fraunces-SemiBold.ttf'),
    Fraunces_Bold: require('./assets/fonts/Fraunces-Bold.ttf'),
    Outfit_Regular: require('./assets/fonts/Outfit-Regular.ttf'),
    Outfit_Medium: require('./assets/fonts/Outfit-Medium.ttf'),
    Outfit_SemiBold: require('./assets/fonts/Outfit-SemiBold.ttf'),
    Outfit_Bold: require('./assets/fonts/Outfit-Bold.ttf'),
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(customFonts);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, [customFonts]);

  console.ignoreAllLogs = true;

  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: true,
  //       shouldSetBadge: true,
  //     }),
  //   });

  //   async function registerForPushNotificationsAsync() {
  //     let token;
  //     if (Constants.isDevice) {
  //       const { status: existingStatus } =
  //         await Notifications.getPermissionsAsync();
  //       let finalStatus = existingStatus;
  //       if (existingStatus !== 'granted') {
  //         const { status } = await Notifications.requestPermissionsAsync();
  //         finalStatus = status;
  //         console.log('existingStatus', existingStatus);
  //       }
  //       if (finalStatus !== 'granted') {
  //         alert('Failed to get push token for push notification!');
  //         console.log('finalStatus', finalStatus);
  //         return;
  //       }
  //       token = (await Notifications.getExpoPushTokenAsync()).data;
  //     } else {
  //       alert('Must use physical device for Push Notifications');
  //     }

  //     return token;
  //   }

  //send the push notification
  //   exports.sendPushNotification = () => {
  //     const q = query(collection(db, 'cities'));

  //     oonSnapshot(q, (querySnapshot) => {
  //       const root = event.data.ref.root;
  //       var messages = [];

  //       //return the main promise
  //       return root
  //         .child('/users')
  //         .once('value')
  //         .then(function (snapshot) {
  //           snapshot.forEach(function (childSnapshot) {
  //             var expoToken = childSnapshot.val().expoToken;

  //             messages.push({
  //               to: expoToken,
  //               sound: 'default',
  //               body: 'New Note Added',
  //             });
  //           });
  //           //firebase.database then() respved a single promise that resolves
  //           //once all the messages have been resolved
  //           return Promise.all(messages);
  //         })
  //         .then((messages) => {
  //           // console.log(messages)
  //           fetch('https://exp.host/--/api/v2/push/send', {
  //             method: 'POST',
  //             headers: {
  //               Accept: 'application/json',
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify(messages),
  //           });
  //         })
  //         .catch((reason) => {
  //           console.log(reason);
  //         });
  //     });
  //   };

  if (!appIsReady) {
    return null;
  }
  return (
    <AuthenticatedUserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={user ? 'Start' : 'Start'}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen
            name='Announcements'
            component={Announcements}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffffff',
                border: 'none',
              },
              headerShadowVisible: false, // applied here
              headerBackVisible: false,
              headerShown: false,
              exact: true,
            }}
          />
          <Stack.Screen
            name='AddAnnouncement'
            component={AddAnnouncement}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffffff',
                border: 'none',
              },
              headerShadowVisible: false, // applied here
              //   headerBackVisible: false,
              // headerShown: false,
            }}
          />
          <Stack.Screen
            name='Donations'
            component={Donations}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffffff',
                border: 'none',
              },
              headerShadowVisible: false, // applied here
              headerBackVisible: false,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Appointment'
            component={Appoitment}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffffff',
                border: 'none',
              },
              headerBackVisible: true,
              headerShadowVisible: false, // applied here
            }}
          />
          <Stack.Screen
            name='Announcement'
            component={Announcement}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffffff',
                border: 'none',
              },
              exact: true,
              headerShadowVisible: false, // applied here
            }}
          />
          <Stack.Screen
            name='Form1'
            component={Form1}
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
            name='Form2'
            component={Form2}
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
            name='Form3'
            component={Form3}
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
            name='Form4'
            component={Form4}
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
            name='Form5'
            component={Form5}
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
            name='Form6'
            component={Form6}
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
            name='Start'
            component={Start}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffffff',
                border: 'none',
              },
              headerShadowVisible: false, // applied here
              headerShown: false,
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
          <Stack.Screen
            name='Menu'
            component={SideMenu}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffffff',
                border: 'none',
              },
              headerShadowVisible: false, // applied here
              headerBackVisible: false,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthenticatedUserProvider>
  );
}
