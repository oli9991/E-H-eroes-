import React from 'react';
import theme from '../style.js';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ImageBackground,
} from 'react-native';

const SimpleInput = ({ placeholder, label, value, changeValue, ...props }) => {
  return (
    <View style={styles.Container}>
      <Text style={[styles.Label, theme.Base]}> {label}</Text>
      <TextInput
        style={[styles.Input, theme.Base]}
        onChangeText={changeValue}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};
export default SimpleInput;

const styles = StyleSheet.create({
  Container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#C6C6C8',
    borderBottomWidth: 1,
  },
  Label: {
    opacity: 0.5,
    width: '30%',
  },
  Input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
});