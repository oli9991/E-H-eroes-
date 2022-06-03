import React from 'react';
import Form from './Form';

function Form3({ navigation, ...props }) {
  const questions = [
    'Have you ever injected drugs?',
    'Did you accept money or drugs to have sex??',
    'Have you had sex with another man? (men only)?',
    'Your partner had sex with another woman? (women only)',
    'Have you changed your partner in the last 6 months?',
  ];

  return (
    <Form
      questions={questions}
      navigation={navigation}
      offset={12}
      form={props.route.params.form}
      next={4}
    />
  );
}

export default Form3;
