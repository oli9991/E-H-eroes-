import React from 'react';
import Form from './Form.js';

function Form5({ navigation, ...props }) {
  const questions = [
    'Jaundice, tuberculosis, rheumatic fever, malaria?',
    'Heart disease, high or low blood pressure?',
    'Heart attack or stroke?',
    'Chronic diseases (diabetes, ulcers, cancer, asthma)?',
  ];

  return (
    <Form
      offset={21}
      questions={questions}
      navigation={navigation}
      form={props.route.params.form}
      next={6}
    />
  );
}

export default Form5;
