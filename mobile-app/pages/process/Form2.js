import React from 'react';
import Form from './Form.js';

function Form2({ navigation, ...props }) {
  const questions = [
    'A partner with hepatitis or HIV positive?',
    'A partner who takes drugs by injection?',
    'A partner who is paid for sex?',
    'A partner with hemophilia?',
    'Multiple partners?',
  ];

  return (
    <Form
      questions={questions}
      navigation={navigation}
      offset={7}
      form={props.route.params.form}
      next={3}
    />
  );
}

export default Form2;
