// React Imports
import React from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';

// Component Imports
import Input from '../input';

// Style Imports
import styles from './style';

const EditModal = ({
  visible,
  closeModal,
  willEditTodo,
  setWillEditTodo,
  onConfirmPress,
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Güncelle</Text>
          <Input
            value={willEditTodo.title}
            onChangeText={t =>
              setWillEditTodo({
                ...willEditTodo,
                title: t,
              })
            }
            placeholder="Güncellenecek Texti Yazınız..."
          />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={closeModal} style={styles.cancelBtn}>
              <Text style={[styles.buttonText, styles.cancelBtn]}>Vazgeç</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmBtn}>
              <Text
                onPress={onConfirmPress}
                style={[styles.buttonText, styles.confirmBtn]}>
                Güncelle
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
