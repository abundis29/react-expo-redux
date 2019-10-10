import React from 'react';
import { Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';
import { Colors, Metrics, Fonts } from '../../../themes';

import { Modal, ModalHeader, ModalBody, ModalFooter } from './baseModal';
import NavigationService from '../../../services/NavigationService';

const ErrorModal = ({ isVisible, closeModal }) => {
  return (
    <Modal style={styles.container} isVisible={isVisible} closeModal={closeModal}>
      <ModalHeader>
        <Text style={styles.modalHeader}>{$t('error.somethingWrong')}</Text>
      </ModalHeader>
      <ModalBody>
        <Text style={styles.message}>{$t('error.doYouWantToRestart')}</Text>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity>
          <Button onPress={closeModal} title={$t('error.cancel')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            onPress={() => {
              closeModal();
              NavigationService.navigate('AuthLoading');
            }}
            title={$t('error.restart')}
          />
        </TouchableOpacity>
      </ModalFooter>
    </Modal>
  );
};

export default ErrorModal;

ErrorModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
    justifyContent: 'center'
  },
  message: {
    color: Colors.steel,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    textAlign: 'center'
  },
  modalHeader: {
    color: 'red',
    textAlign: 'center'
  }
});
