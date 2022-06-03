import Checkbox from 'expo-checkbox';
import { addDoc, collection } from 'firebase/firestore/lite';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../components/Button.js';
import theme from '../../style.js';
import { db } from '../../utils/firebase.js';

function Form({ navigation, questions, form, next, offset }) {
  const handleNext = async (values) => {
    if (next) {
      navigation.navigate('Form' + next, {
        form: {
          ...form,
          ...values,
        },
      });
    } else {
      const coll = collection(db, 'donations');
      await addDoc(coll, {
        ...form,
        ...values,
      }).then(() => {
        navigation.navigate('Donations', { reload: true });
      });
    }
  };

  const defaultValues = questions.reduce((previousValue, _, index) => {
    return { ...previousValue, [index + offset]: false };
  }, {});

  return (
    <View style={styles.Container}>
      <View style={styles.Welcome}>
        <Text style={[theme.BaseBold, styles.Txt145]}>
          We want to know more about your health in general:
        </Text>
      </View>
      <Formik initialValues={defaultValues} onSubmit={handleNext}>
        {({ setFieldValue, handleSubmit, values }) => (
          <>
            <View style={styles.Form}>
              {questions &&
                questions.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.Row}
                    onPress={() =>
                      setFieldValue(index + offset, !values[index + offset])
                    }
                  >
                    <Checkbox
                      disabled={false}
                      value={values[index + offset]}
                      onValueChange={(newValue) =>
                        setFieldValue(index + offset, newValue)
                      }
                      style={styles.Checkbox}
                    />
                    <Text style={[theme.Base]}>{item}</Text>
                  </TouchableOpacity>
                ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingTop: 63,
    paddingBottom: 63,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // height: 728,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  Txt145: {
    textAlign: 'left',
    width: '100%',
  },
  Checkbox: {
    marginRight: 12,
  },
  Row: {
    display: 'flex',
    width: '90%',
    marginLeft: '5%',
    paddingRight: '5%',
    flexDirection: 'row',
    justifyContent: 'start',
    alignContent: 'center',
    marginBottom: 18,
  },
});

export default Form;
