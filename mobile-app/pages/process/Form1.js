import React from 'react';
import Form from './Form.js';

function Form1({ navigation, ...props }) {
  const questions = [
    'Do you consider that you are in good health?',
    'Have you had any unexpected weight loss lately?',
    'Have you had an unexplained fever lately?',
    'Have you had dental treatment, vaccinations lately?',
    'Are you on medication?',
    'Are you smocking?',
    'You have recently consumed alcohol?',
  ];

  return (
    <Form
      offset={0}
      questions={questions}
      navigation={navigation}
      form={props.route.params.form}
      next={2}
    />
  );
}

export default Form1;
