import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/Button.js';
import CalendarInput from '../../components/CalendarInput.js';
import Input from '../../components/Input.js';
import theme from '../../style.js';

function Appoitment({ navigation, ...props }) {
  const handleNext = (values) => {
    navigation.navigate('Form1', {
      form: {
        ...props.route.params.form,
        ...values,
        timeslot: new Date(values.timeslot).toISOString(),
      },
    });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Welcome}>
        <Text style={[theme.Title, styles.Txt145]}>
          Schedule blood donation
        </Text>
        <Text style={[theme.Base, styles.Txt145]}>
          We thank you for your kind gesture. We hoper lives will be saved with
          your donation.
        </Text>
      </View>
      <Formik
        initialValues={{
          timeslot: new Date(),
          fullname: 'Name',
          email: 'email@gmail.com',
          age: '19',
        }}
        onSubmit={handleNext}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
        }) => (
          <>
            <View style={styles.Form}>
              <Input
                placeholder={'Your full name'}
                label='Full Name'
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                value={values.fullname}
              />
              <Input
                placeholder={'Email address'}
                label='Email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Input
                placeholder={'18-90'}
                label='Age'
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
              />
              <CalendarInput
                label='Time slot'
                setDate={(v) => setFieldValue('timeslot', v)}
                date={values.timeslot}
              />
            </View>
            <CustomButton title={'Next'} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    flex: 1,
    paddingTop: 63,
    paddingBottom: 63,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 728,
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
    paddingBottom: 100,
  },
  Txt145: {
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },

  Txt264: {
    letterSpacing: -0.2,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  Txt383: {
    color: 'rgba(11,10,10,1)',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  Txt242: {
    color: 'rgba(243,243,243,1)',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  Button: {
    marginTop: 1,
  },
});

export default Appoitment;
