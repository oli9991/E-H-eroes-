import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import theme, { colors } from '../style.js';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/Button.js';

const Announcement = (props) => {
  const { item } = props.route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.Info1}>
      <View style={styles.Frame6}>
        <Text style={[theme.Title, styles.Title]}>{item.title}</Text>
        <Text style={theme.base}>{item.location}</Text>
      </View>
      <View style={styles.Frame6}>
        <Text style={[theme.ButtonText, styles.Info]}>Full Information</Text>
        <Text style={theme.base}>{item.fullInfo}</Text>
      </View>
      <View style={styles.Frame6}>
        <Text style={[theme.ButtonText, styles.Info]}>Blood Type</Text>
        <Text style={theme.base}>
          {item.bloodType}, {item.rh}
        </Text>
      </View>
      <View style={styles.Frame6}>
        <CustomButton
          style={styles.Button}
          onPress={() => navigation.navigate('Appointment')}
          title={`Schedule donation`}
        />
      </View>
    </View>
  );
};

export default Announcement;

const styles = StyleSheet.create({
  Info1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '5%',
    width: '100%',
    backgroundColor: '#ffffff',
    height: '100%',
  },
  PageTitle: {
    // flex: 1,
    textAlign: 'center',
  },
  Info: {
    fontWeight: '700',
    marginBottom: 4,
  },

  Title: {
    // marginBottom: 8,
  },

  Frame6: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: '5%',
    paddingBottom: '5%',
    backgroundColor: '#ffffff',
    width: '100%',
  },

  Button: {
    width: '100%',
    backgroundColor: colors.orange,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    marginBottom: 20,
    borderRadius: 100,
  },
});
