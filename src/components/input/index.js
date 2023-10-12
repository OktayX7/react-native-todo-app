// Native Imports
import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

// Package Imports
import Icon from 'react-native-vector-icons/AntDesign';

// Style Imports
import styles from './style';

const Input = ({
  placeholder = 'Type Someting',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName = 'pluscircle',
  style = '',
  onIconPress = () => {},
  value = '',
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        multiline={multiline}
        keyboardType={keyboardType}
        style={[styles.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
