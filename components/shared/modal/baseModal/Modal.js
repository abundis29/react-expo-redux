import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';

const ModalWrapper = ({ isVisible, closeModal, children }) => {
  return (
    <Modal visible={isVisible} animationType="slide" onRequestClose={closeModal} transparent>
      <View style={styles.container}>
        <View style={styles.modalWrap}>{children}</View>
      </View>
    </Modal>
  );
};

export default ModalWrapper;

ModalWrapper.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
    justifyContent: 'center'
  },
  modalWrap: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderRadius: 10,
    borderWidth: 1,
    margin: 18,
    minHeight: 100,
    textAlign: 'center'
  }
});
