import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';
  
export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export const headerHeight = 80;
export const menuHeight = 60;
export const viewHeight = screenHeight - headerHeight - menuHeight;

export function wp(percentage) {
  const value = (percentage * screenWidth) / 100;
  return Math.round(value);
}
  
export function hp(percentage) {
  const value = (percentage * screenHeight) / 100;
  return Math.round(value);
}


export const logo = require('../../public/images/logo.png')