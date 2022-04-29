import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import theme, { colors } from '../style.js';

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles(props).ButtonHorizontal} {...props}>
      <Text style={[styles(props).Text, theme.ButtonText]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = (props) =>
  StyleSheet.create({
    ButtonHorizontal: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 18,
      paddingRight: 18,
      marginBottom: 20,
      borderRadius: 100,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: 'rgba(0,0,0,0.2)',
      width: '90%',
      backgroundColor: props.backgroundColor ?? colors.orange,
    },
    Text: {
      textAlign: 'center',
      justifyContent: 'center',
      width: '100%',
      color: props.color ?? colors.white,
    },
  });
