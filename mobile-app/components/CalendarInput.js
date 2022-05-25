import React, { useState } from 'react';
import theme, { colors } from '../style.js';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CalendarInput = ({
  placeholder,
  label,
  value,
  date,
  setDate,
  ...props
}) => {
  const onChange = (_, value) => {
    setDate(value);
  };
  return (
    <View style={styles.Container}>
      <Text style={[styles.Label, theme.Base]}> {label}</Text>
      <DateTimePicker
        value={date}
        mode='datetime'
        is24Hour={true}
        onChange={onChange}
        style={styles.datePicker}
      />
    </View>
  );
};
export default CalendarInput;
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
  pickedDateContainer: {
    padding: 20,
    backgroundColor: colors.orange,
    borderRadius: 10,
    color: 'black',
    // borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
    color: 'black',
  },
  // This only works on iOS
  datePicker: {
    width: 200,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'black',
  },
});
