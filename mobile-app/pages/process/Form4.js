import React from 'react';
import Form from './Form';

function Form4({ navigation, ...props }) {
  const questions = [
    'Surgery or medical investigations?',
    'Tattoos, acupuncture, earrings?',
    'Have you been transfused?',
    'Have you been pregnant?',
  ];

  return (
    <Form
      offset={17}
      questions={questions}
      navigation={navigation}
      form={props.route.params.form}
      next={5}
    />
  );
}

export default Form4;
