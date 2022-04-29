import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native-elements';
import CustomButton from '../../components/Button.js';
import Input from '../../components/Input.js';
import theme from '../../style.js';

function Form4({ navigation }) {
  const questions = [
    'Surgery or medical investigations?',
    'Tattoos, acupuncture, earrings?',
    'Have you been transfused?',
    'Have you been pregnant?',
  ];
  return (
    <View style={styles.Container}>
      <View style={styles.Welcome}>
        <Text style={[theme.BaseBold, styles.Txt145]}>
          Since the last donation, or in the last 12 months, have you suffered
          from :
        </Text>
      </View>
      <View style={styles.Form}>
        {questions &&
          questions.map((item, index) => (
            <CheckBox
              key={index}
              title={item}
              textStyle={[theme.Base, styles.TextCheckbox]}
              containerStyle={styles.Checkbox}
              //   iconRight
            />
          ))}
      </View>

      <CustomButton
        title={'Next'}
        onPress={() => navigation.navigate('Form5')}
      />
    </View>
  );
}

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
    // height: 728,
    width: '100%',
  },
  Welcome: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    // marginLeft: '5%',
    // marginRight: '5%',
  },
  Txt145: {
    // color: 'rgba(0,0,0,1)',
    textAlign: 'left',
    width: '100%',
    // marginBottom: 20,
    // marginRight: 12,
  },
  TextCheckbox: {
    // color: 'rgba(0,0,0,1)',
    textAlign: 'left',
    // marginBottom: 20,
    // marginRight: 12,
  },
  Checkbox: {
    borderWidth: 0,
    backgroundColor: '#fff',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // width: '90%',
    // alignItems: 'flex-start',
  },
});
export default Form4;
