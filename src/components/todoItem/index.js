// React Imports
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// Style Imports
import styles from './style';
import {colors} from '../../utils/constans';

// Package Imports
import Icon from 'react-native-vector-icons/AntDesign';

const TodoItem = ({item, completedOnPress, editOnPress, deleteOnPress}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.date}>
          {new Date(item?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={completedOnPress}>
          <Icon
            style={styles.icon}
            name={item?.completed ? 'checkcircle' : 'checkcircleo'}
            color={item?.completed ? colors.green : colors.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={editOnPress}>
          <Icon style={styles.icon} name="edit" color={colors.blue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteOnPress}>
          <Icon style={styles.icon} name="delete" color={colors.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
