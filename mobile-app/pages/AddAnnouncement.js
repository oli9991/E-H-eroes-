import { Formik } from 'formik';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SimpleInput from '../components/SimpleInput';
import theme, { colors } from '../style.js';
import RNPickerSelect from 'react-native-picker-select';
import CustomButton from '../components/Button';
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from '../utils/firebase';

function AddAnnouncement({ navigation }) {
  const handleAdd = async (values) => {
    const { title, location, shortInfo, fullInfo, rh, bloodType } = values;
    const coll = collection(db, 'announcements');
    await addDoc(coll, {
      title,
      location,
      shortInfo,
      fullInfo,
      bloodType,
      rh,
    }).then(() => {
      navigation.navigate('Announcements', { reload: true });
    });
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Form}>
        <Text style={[theme.Subtitle, styles.Title]}> Add announcement</Text>
        <Formik initialValues={{ title: '' }} onSubmit={handleAdd}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <>
              <View style={styles.Form}>
                <SimpleInput
                  placeholder={'Title'}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                />
                <SimpleInput
                  placeholder={'Short information'}
                  onChangeText={handleChange('shortInfo')}
                  onBlur={handleBlur('shortInfo')}
                  value={values.shortInfo}
                />
                <SimpleInput
                  placeholder={'Full information'}
                  onChangeText={handleChange('fullInfo')}
                  onBlur={handleBlur('fullInfo')}
                  value={values.fullInfo}
                  multiline
                  maxLength={400}
                />
                <SimpleInput
                  placeholder={'Location'}
                  onChangeText={handleChange('location')}
                  onBlur={handleBlur('location')}
                  value={values.location}
                />
              </View>
              <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => setFieldValue('bloodType', value)}
                items={[
                  { label: 'O(I)', value: 'O(I)' },
                  { label: 'A(II)', value: 'A(II)' },
                  { label: 'B(III)', value: 'B(III)' },
                  { label: 'AB(IV)', value: 'AB(IV)' },
                ]}
              />
              <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => setFieldValue('rh', value)}
                items={[
                  { label: 'Rh+', value: 'Rh+' },
                  { label: 'Rh-', value: 'Rh-' },
                ]}
              />
              <View style={styles.Welcome}>
                <CustomButton title={'Add'} onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

export default AddAnnouncement;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '80%',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.disabled,
    borderRadius: 8,
    color: 'black',
    marginTop: 12,
    marginLeft: '10%',
    // paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0,
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingTop: 12,
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

  Title: {
    marginBottom: 42,
  },

  Select: {
    height: 40,
    padding: 10,
    width: '90%',
    border: 'none',
  },
});
