import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import CustomButton from '../components/Button.js';
import theme, { colors } from '../style.js';

const Start = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Welcome}>
        <Text style={[theme.Title, styles.Txt145]}>Start your journey</Text>
        <Text style={[styles.Txt264, theme.Base]}>
          Create your new account to schedule your blood donations, view
          humanitarian announcements and much more...
        </Text>
      </View>
      <View style={styles.Welcome}>
        {/* <View style={styles.ButtonHorizontal}>
          <Text
            style={[styles.Txt383, theme.ButtonText]}
            onPress={() => navigation.navigate('Login')}
          >
            Sign in with email
          </Text>
        </View> */}
        <CustomButton
          title={'Sign in with email'}
          onPress={() => navigation.navigate('Login')}
          color={colors.black}
          backgroundColor={colors.white}
        />
        <CustomButton
          title={'Register with email'}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
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

  ButtonHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 19,
    paddingRight: 19,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.2)',
    width: 350,
    height: 50,
  },
  Txt383: {
    color: 'rgba(11,10,10,1)',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  ButtonHorizontal1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 100,
    backgroundColor: 'rgba(255,107,0,1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.2)',
    width: 350,
    height: 50,
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

export default Start;
