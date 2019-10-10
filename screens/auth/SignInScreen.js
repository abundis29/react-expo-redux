import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import $t from 'i18n';

import { login, facebookLogin, googleLogin } from '../../store/actions/UserActions';
import { SignInForm } from '../../components/auth/SignInForm';
import { signInErrorSelector } from '../../store/selectors/ErrorSelector';
// import { Fonts, Colors } from '../../themes';

const styles = StyleSheet.create({
  // buttonText: {
  //   borderColor: Colors.charcoal,
  //   color: Colors.snow,
  //   fontFamily: Fonts.type.bold,
  //   fontSize: Fonts.size.medium,
  //   margin: 18,
  //   textAlign: 'right'
  // },
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: $t('auth.signIn')
  };

  static propTypes = {
    navigation: PropTypes.object,
    login: PropTypes.func,
    facebookLogin: PropTypes.func,
    googleLogin: PropTypes.func,
    signInError: PropTypes.bool
  };

  onSubmit = signInData => {
    this.props.login(signInData);
  };

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  goToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  render() {
    // const { signInError, facebookLogin, googleLogin } = this.props;
    const { signInError } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <SignInForm onSubmit={this.onSubmit} signInError={signInError} />
          {/* <Button
            style={styles.buttonText}
            title="Sign in with Facebook!"
            onPress={facebookLogin}
          />
          <Button
            style={styles.buttonText}
            title="Sign in with Google!"
            onPress={googleLogin}
          />
          <Button
            style={styles.buttonText}
            title="Sign up!"
            onPress={this.goToSignUp}
          />
          <Button
            style={styles.buttonText}
            title="Forgot password"
            onPress={this.goToForgotPassword}
          /> */}
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    signInError: signInErrorSelector(state)
  };
};

const mapDispatchToProps = {
  login,
  facebookLogin,
  googleLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
