import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import CustomButton from '../components/Button.js';
import Input from '../components/Input.js';
import theme, { colors } from '../style.js';
import { auth } from '../utils/firebase.js';

const Register = ({ navigation }) => {
  const handleRegister = (values) => {
    const { email, password } = values;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        updateProfile(user, {
          displayName: values.name,
        });
      })
      .then(() => {
        navigation.navigate('Login');
      });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Welcome}>
        <Text style={[theme.Title, styles.Txt145]}>Start your journey</Text>
        <Text style={[styles.Txt264, theme.Base]}>
          Create your new account to schedule your blood donations, view
          humanitarian announcements and much more...
        </Text>
      </View>

      <Formik
        initialValues={{ email: 'example@gmail.com' }}
        onSubmit={handleRegister}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={styles.Form}>
              {/* <Input placeholder={'Your full name'} label='Name' /> */}
              <Input
                placeholder={'Your full name'}
                label='Full name'
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <Input
                placeholder={'Your email address'}
                label='Address'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {/* <Input placeholder={'Your phone'} label='Phone' /> */}
              <Input
                placeholder={'Password'}
                label='Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </View>
            <View style={styles.Welcome}>
              <CustomButton title={'Register'} onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
      <View style={styles.Disclaimer}>
        <Text style={[theme.SmallText]}>
          By signing into this application, you’re agreeing to our{' '}
          <Text styles={{ fontWeight: '900' }}>Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingTop: 63,
    paddingBottom: 63,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 728,
    width: '100%',
  },
  Welcome: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
  },
  Form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
  },
  Txt145: {
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  Txt264: {
    letterSpacing: -0.2,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  Txt383: {
    color: 'rgba(11,10,10,1)',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  Disclaimer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 20,
    backgroundColor: 'rgba(237,237,237,0.6)',
    width: '90%',
    textAlign: 'center',
  },
});

export default Register;
