import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import theme, { colors } from '../style.js';
import { Icon } from 'react-native-elements';
import CustomButton from './Button';

export default function SideMenu() {
  const navigation = useNavigation();
  const route = navigation.getState().routes[0].name;

  useEffect(() => {
    console.log(route, navigation.getState(), navigation);
  }, []);

  return (
    <View style={styles.SideMenu}>
      <View style={styles.TableViewRow}>
        <View style={styles.Container}>
          <View style={styles.Labels}>
            <Text style={theme.Title}>David Coon</Text>
          </View>
        </View>
        <Icon
          name='close-outline'
          type='ionicon'
          color={colors.black}
          size={42}
          styles={{
            marginRight: 16,
            flex: 1,
            color: colors.black,
            fontSize: 20,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.MenuItems}>
        <View
          style={[
            styles.ParticlesMenuItem,
            route === 'Announcements' && styles.ActiveMenuItem,
          ]}
        >
          <View style={styles.Item}>
            <TouchableOpacity
              style={styles.Label}
              onPress={() => navigation.navigate('Announcements')}
            >
              <Text
                style={[
                  theme.MenuItem,
                  route === 'Announcements' && styles.ActiveLabel,
                ]}
              >
                Announcements
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.ParticlesMenuItem,
            route === 'Donations' && styles.ActiveMenuItem,
          ]}
        >
          <View style={styles.Item}>
            <TouchableOpacity
              style={styles.Label}
              onPress={() => navigation.navigate('Donations')}
            >
              <Text
                style={[
                  theme.MenuItem,
                  route === 'Donations' && styles.ActiveLabel,
                ]}
              >
                Donations
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.ParticlesMenuItem,
            route === 'Stocks' && styles.ActiveMenuItem,
          ]}
        >
          <View style={styles.Item}>
            <TouchableOpacity
              style={[styles.Label]}
              onPress={() => navigation.navigate('Stocks')}
            >
              <Text
                style={[
                  theme.MenuItem,
                  route === 'Stocks' && styles.ActiveLabel,
                ]}
              >
                Blood stocks
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SideMenu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 49,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 159,
    width: 390,
    height: 844,
  },
  TableViewRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 31,
    marginBottom: 40,
    width: 390,
    height: 96,
  },
  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 15,
    paddingRight: 15,
    width: 214,
    height: 96,
  },
  Thumb: {
    width: 52,
    height: 48,
    marginRight: 8,
  },
  Labels: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    width: 122,
  },

  RemixIconsLineSystemCloseLine: {
    width: 18,
    height: 18,
  },

  MenuItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  ParticlesMenuItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 0,
    marginBottom: 10,
  },
  Item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 15,
    paddingRight: 15,
  },

  Label: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },

  ActiveMenuItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 10,
    marginBottom: 10,
    backgroundColor: colors.orange,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
  },

  ActiveLabel: {
    color: colors.white,
  },

  Icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
});
