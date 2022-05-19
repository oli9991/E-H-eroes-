import React, { useContext } from 'react';
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
import { AuthenticatedUserContext } from '../providers/AuthenticatedUserProvider.js';
import theme, { colors } from '../style.js';

export default function Announcements({ navigation }) {
  const { user, setUser } = useContext(AuthenticatedUserContext);

  const list = [
    {
      id: 0,
      title: 'Donna Regali',
      location: 'Saint Bernard Hospital, Angel Street 21',
      info: 'Donna needs donations for AB blood type. She has been in a car accident and has three previous incidents.',
      bloodInfo: 'A(I), Rh+',
      fullInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et luctus turpis. Nam fermentum a dolor eget semper. Vestibulum eu erat id ante fermentum efficitur eu at ligula. Ut gravida orci in cursus pellentesque. Proin a malesuada quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Morbi placerat justo in purus ultricies accumsan.',
    },
    {
      id: 1,
      title: 'Donna Regali',
      location: 'Saint Bernard Hospital, Angel Street 21',
      info: 'Donna needs donations for AB blood type. She has been in a car accident and has three previous incidents.',
      bloodInfo: 'A(I), Rh+',
      fullInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et luctus turpis. Nam fermentum a dolor eget semper. Vestibulum eu erat id ante fermentum efficitur eu at ligula. Ut gravida orci in cursus pellentesque. Proin a malesuada quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Morbi placerat justo in purus ultricies accumsan.',
    },
    {
      id: 2,
      title: 'Donna Regali',
      location: 'Saint Bernard Hospital, Angel Street 21',
      info: 'Donna needs donations for AB blood type. She has been in a car accident and has three previous incidents.',
      bloodInfo: 'A(I), Rh+',
      fullInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et luctus turpis. Nam fermentum a dolor eget semper. Vestibulum eu erat id ante fermentum efficitur eu at ligula. Ut gravida orci in cursus pellentesque. Proin a malesuada quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Morbi placerat justo in purus ultricies accumsan.',
    },
    {
      id: 3,
      title: 'Donna Regali',
      location: 'Saint Bernard Hospital, Angel Street 21',
      info: 'Donna needs donations for AB blood type. She has been in a car accident and has three previous incidents.',
      bloodInfo: 'A(I), Rh+',
      fullInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et luctus turpis. Nam fermentum a dolor eget semper. Vestibulum eu erat id ante fermentum efficitur eu at ligula. Ut gravida orci in cursus pellentesque. Proin a malesuada quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Morbi placerat justo in purus ultricies accumsan.',
    },
    {
      id: 4,
      title: 'Donna Regali',
      location: 'Saint Bernard Hospital, Angel Street 21',
      info: 'Donna needs donations for AB blood type. She has been in a car accident and has three previous incidents.',
      bloodInfo: 'A(I), Rh+',
      fullInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et luctus turpis. Nam fermentum a dolor eget semper. Vestibulum eu erat id ante fermentum efficitur eu at ligula. Ut gravida orci in cursus pellentesque. Proin a malesuada quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Morbi placerat justo in purus ultricies accumsan.',
    },
  ];

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
        {list &&
          list.map((item, index) => (
            <View style={styles.Card} key={index}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Announcement', { item })}
              >
                <View style={styles.Frame6}>
                  <Text style={[theme.Title, styles.Title]}>{item.title}</Text>
                  <Text style={theme.base}>{item.location}</Text>
                </View>
                <View style={styles.Frame6}>
                  <Text style={[theme.ButtonText, styles.Info]}>
                    Short Information
                  </Text>
                  <Text style={theme.base}>{item.info}</Text>
                </View>
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
    marginBottom: 8,
  },
});
