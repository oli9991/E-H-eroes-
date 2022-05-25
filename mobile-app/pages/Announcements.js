import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import Header from '../components/Header.js';
import { AuthenticatedUserContext } from '../providers/AuthenticatedUserProvider.js';
import theme, { colors } from '../style.js';
import { db } from '../utils/firebase.js';
import { collection, getDocs } from 'firebase/firestore/lite';

export default function Announcements({ navigation, ...props }) {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [announcements, setList] = useState([]);

  const Read = async () => {
    const coll = collection(db, 'announcements');
    const snapshot = await getDocs(coll);
    const final = snapshot.docs.map((d) => d.data());

    setList(final);
  };

  const handlePress = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL();
    Alert.alert(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  useEffect(() => {
    Read();
  }, [props.route.params]);

  if (!user) {
    navigation.navigate('Start');
  }
  return (
    <View style={styles.Container}>
      <Header
        title={'Announcements'}
        onAdd={() => navigation.navigate('AddAnnouncement')}
      />
      <ScrollView style={styles.List}>
        {announcements &&
          announcements.map((item, index) => (
            <View style={styles.Card} key={index}>
              <View style={styles.Frame6}>
                <Text style={[theme.Title, styles.Title]}>{item.title}</Text>
                <Text style={theme.base}>
                  <Text
                    style={[theme.Base, styles.Location]}
                    onPress={() => {
                      handlePress(
                        'https://www.google.com/maps/search/' +
                          encodeURI(item.location)
                      );
                    }}
                  >
                    {item.location}
                  </Text>
                </Text>
              </View>
              <View style={styles.Frame6}>
                <Text style={[theme.ButtonText, styles.Info]}>
                  Short Information
                </Text>
                <Text style={theme.base}>{item.shortInfo}</Text>
              </View>
              <View style={styles.Frame6}>
                <Text style={[theme.ButtonText, styles.Info]}>Blood Type</Text>
                <Text style={theme.base}>
                  {item.bloodType}, {item.rh}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Announcement', { item })}
              >
                <Text style={[theme.BaseBold, styles.MoreInfo]}>More info</Text>
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
    paddingLeft: 10,
    paddingRight: '2.5%',
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
    // marginBottom: 8,
  },
  Location: {
    color: colors.blue,
    // fontWeight: 600,
  },
  MoreInfo: {
    color: colors.orange,
  },
});
