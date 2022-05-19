import React, { useContext } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import CustomButton from '../components/Button.js';
import Input from '../components/Input.js';
import theme from '../style.js';
import { auth } from '../utils/firebase.js';
import { Formik } from 'formik';
import { AuthenticatedUserContext } from '../providers/AuthenticatedUserProvider.js';

const Login = ({ navigation }) => {
  const { user, setUser } = useContext(AuthenticatedUserContext);

  const handleLogin = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password).then((response) => {
      setUser(response);
      navigation.navigate('Announcements');
    });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Welcome}>
        <Text style={[theme.Title, styles.Txt145]}>Welcome back</Text>
      </View>
      <Formik
        initialValues={{ email: 'example@gmail.com' }}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={styles.Form}>
              <Input
                placeholder={'Your email address'}
                label='Address'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
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
              <CustomButton title={'Login'} onPress={handleSubmit} />
              <View style={[styles.RegisterOption]}>
                <Text style={theme.Base}>Don't have an account? </Text>
                <View styles={styles.RegisterButton}>
                  <Text
                    style={[theme.Link, styles.RegisterLink]}
                    onPress={() => navigation.navigate('Register')}
                  >
                    Register now
                  </Text>
                  <Image
                    style={{ width: '100%', resizeMode: 'contain', height: 10 }}
                    source={require('../assets/image.png')}
                  />
                </View>
              </View>
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
  RegisterOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  RegisterButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  RegisterLink: {
    paddingTop: 10,
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

  Txt242: {
    color: 'rgba(243,243,243,1)',
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

export default Login;
