import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputField } from '../shared/FormFields';
import { signInValidationRules } from '../../validation /auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';
import { Fonts, Colors } from '../../themes';

export const SignInForm = props => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={values => props.onSubmit(values)}
    validationSchema={signInValidationRules}
  >
    {({ handleSubmit }) => (
      <View>
        <Field
          style={styles.buttonText}
          name="email"
          component={TextInputField}
          placeholder={$t('auth.enterEmail')}
        />
        <Field
          style={styles.buttonText}
          name="password"
          component={TextInputField}
          secureTextEntry
          placeholder={$t('auth.enterPassword')}
        />
        <ErrorText
          style={styles.textError}
          error={!!props.signInError}
          message={$t('auth.invalidCredentials')}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.button}>{$t('auth.signIn')}</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  signInError: PropTypes.bool
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.bloodOrange,
    borderRadius: 10,
    borderWidth: 0.5,
    color: Colors.charcoal,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    height: 60,
    margin: 18,
    paddingTop: 18,
    textAlign: 'center'
  },
  buttonText: {
    borderColor: Colors.bloodOrange,
    borderRadius: 10,
    borderWidth: 0.5,
    color: Colors.charcoal,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    height: 60,
    margin: 18,
    textAlign: 'center'
  },
  textError: {
    color: 'red'
  }
});
