'use strict';
import { StyleSheet } from 'react-native';

const colors = {
  orange: '#FF6B00',
  green: '#389810',
  white: '#F3F3F3',
  blue: '#4972DB',
  black: '#0B0A0A',
  disabled: '#3C3C43',
};

export { colors };

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontFamily: 'Fraunces_700Bold',
    fontSize: 28,
    fontWeight: '700',
  },
  Subtitle: {
    fontFamily: 'Fraunces_700SemiBold',
    fontSize: 28,
    fontWeight: '700',
  },
  Base: {
    fontSize: 16,
    fontFamily: 'Outfit_400Regular',
    fontWeight: '400',
    // lineHeight: 20,
  },
  Link: {
    fontSize: 16,
    fontFamily: 'Outfit_600SemiBold',
    fontWeight: '600',
    // lineHeight: 20,
    // color: '#FF6B00',
  },
  MenuItem: {
    fontSize: 20,
    fontFamily: 'Outfit_600SemiBold',
    fontWeight: '600',
    // lineHeight: 24,
  },
  SmallText: {
    fontSize: 14,
    fontFamily: 'Outfit_400Regular',
    fontWeight: '400',
    // lineHeight: 20,
    textAlign: 'center',
  },
  ButtonText: {
    fontSize: 20,
    fontFamily: 'Outfit_500Medium',
    fontWeight: '500',
    // lineHeight: 24,
    letterSpacing: 0.4,
  },
});