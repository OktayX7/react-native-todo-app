import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export const Header = ({children}) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};
