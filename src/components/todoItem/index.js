import {Text, View} from 'react-native';
import React from 'react';

// Style Imports
import styles from './style';

const TodoItem = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

export default TodoItem;
