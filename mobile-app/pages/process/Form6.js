import React from 'react';
import Form from './Form.js';

function Form6({ navigation, ...props }) {
  const questions = [
    'Have you been exposed to hepatitis (family sick or occupational risk)?',
    'Have you been in detention (PRISON) for the last year?',
    'Were you denied or deferred to a previous donation?',
    'Do you have hobbies or occupations that require special attention 24 hours after donation (eg driver, climber, diver, etc.)?',
    'Were you born, lived or traveled abroad?',
  ];

  return (
    <Form
      offset={25}
      questions={questions}
      navigation={navigation}
      form={props.route.params.form}
    />
  );
}

export default Form6;
