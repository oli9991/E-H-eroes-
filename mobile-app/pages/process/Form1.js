import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import Checkbox from 'expo-checkbox';
import CustomButton from '../../components/Button.js';
import Input from '../../components/Input.js';
import theme from '../../style.js';

function Form1({ navigation }) {
  const questions = [
    'Do you consider that you are in good health?',
    'Have you had any unexpected weight loss lately?',
    'Have you had an unexplained fever lately?',
    'Have you had dental treatment, vaccinations lately?',
    'Are you on medication?',
    'Are you smocking?',
    'You have recently consumed alcohol?',
  ];
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.Container}>
      <View style={styles.Welcome}>
        <Text style={[theme.BaseBold, styles.Txt145]}>
          We want to know more about your health in general:
        </Text>
      </View>
      <View style={styles.Form}>
        {questions &&
          questions.map((item, index) => (
            <View key={index} style={styles.Row}>
              <Checkbox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={styles.Checkbox}
              />
              <Text style={[theme.Base]}>{item}</Text>
            </View>
          ))}
      </View>

      <CustomButton
        title={'Next'}
        onPress={() => navigation.navigate('Form2')}
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
  },
  Txt145: {
    textAlign: 'left',
    width: '100%',
  },
  Checkbox: {
    marginRight: 12,
  },
  Row: {
    display: 'flex',
    width: '90%',
    marginLeft: '5%',
    paddingRight: '5%',
    flexDirection: 'row',
    justifyContent: 'start',
    alignContent: 'center',
    marginBottom: 12,
  },
});

export default Form1;
