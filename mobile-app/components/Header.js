import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import theme, { colors } from '../style.js';
// import Ionicons from '@expo/vector-icons/Ionicons';

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Header} {...props}>
      <View>
        <FontAwesomeIcon
          icon={faBars}
          size={36}
          styles={{
            marginRight: 16,
            flex: 1,
            color: colors.black,
            fontSize: 20,
          }}
          onPress={() => navigation.navigate('Menu')}
        />
      </View>
      <Text style={[styles.PageTitle, theme.Subtitle]}>{props.title}</Text>
      <View>
        <FontAwesomeIcon
          size={40}
          icon={faCirclePlus}
          type='feather'
          color={colors.blue}
          styles={{ width: 32, height: 32, flex: 1 }}
          onPress={props.onAdd}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: '10%',
    paddingRight: 10,
    paddingLeft: 10,
    width: '100%',
  },
  PageTitle: {
    flex: 1,
    textAlign: 'center',
  },
});
