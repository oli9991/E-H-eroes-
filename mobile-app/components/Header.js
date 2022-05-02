import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import theme, { colors } from '../style.js';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Header} {...props}>
      <View>
        <Icon
          name='menu-outline'
          type='ionicon'
          color={colors.black}
          size={42}
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
        <Icon
          reverse
          size={20}
          name='plus'
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
    paddingTop: 10,
    paddingBottom: '5%',
    paddingRight: 10,
    paddingLeft: 10,
    width: '100%',
  },
  PageTitle: {
    flex: 1,
    textAlign: 'center',
  },
});
