import { collection, doc, getDocs, getDoc } from 'firebase/firestore/lite';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../components/Header.js';
import theme, { colors } from '../style.js';
import { db } from '../utils/firebase.js';
import { prettyDate } from '../utils/functions.js';

export default function Donations({ navigation, ...props }) {
  const [donations, setList] = useState([]);

  const getAnnouncement = async (id) => {
    if (id) {
      const docRef = doc(db, 'announcements', id);
      const data = await getDoc(docRef);
      const result = data.data();

      console.log(result);

      return result;
    }
    return null;
  };

  const Read = async () => {
    const coll = collection(db, 'donations');
    const snapshot = await getDocs(coll);
    const final = await Promise.all(
      snapshot.docs
        .map((d) => d.data())
        .map(async (e) => {
          return {
            ...e,
            timeslot: prettyDate(new Date(e.timeslot.seconds)),
            announcement:
              e.announcement && (await getAnnouncement(e.announcement.id)),
          };
        })
    );

    setList(final);
  };

  useEffect(() => {
    Read();
  }, [props.route.params]);

  return (
    <View style={styles.Container}>
      <Header
        title={'Donations'}
        onAdd={() => navigation.navigate('Appointment')}
      />
      <ScrollView style={styles.List}>
        {donations &&
          donations.map((item, index) => (
            <View style={styles.Card} key={index}>
              <TouchableOpacity>
                <View style={styles.Frame6}>
                  <Text style={[theme.Subtitle, styles.Title]}>
                    {item.location}
                  </Text>
                  <Text style={theme.base}>{item.timeslot}</Text>
                </View>
                {item.announcement && (
                  <View style={styles.Frame7}>
                    <Text style={[theme.ButtonText, styles.Info]}>
                      Donated for
                    </Text>
                    <Text style={theme.base}>
                      {item.announcement && item.announcement.title}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 31,
    paddingBottom: 15,
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
    height: '100%',
    // height: 464,
    backgroundColor: '#fff',
  },
  List: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
    height: '100%',
    // overflow: 'auto',
  },

  Card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // shadowColor: colors.black,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    borderRadius: 12,
    padding: 16,
    borderColor: 'rgba(60, 60, 67, 0.1)',
    borderWidth: 1,
    marginBottom: 16,
  },

  Frame6: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  Info: {
    fontWeight: '700',
    marginBottom: 4,
  },

  Title: {
    marginBottom: 8,
  },
});
