import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';
import { Fonts, Colors, Metrics } from '../../themes';

export default class LeftSliderScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button onPress={() => this.props.navigation.closeDrawer()} title="close" />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePassword')}>
            <Text style={styles.text}>{$t('profile.changePassword.changePassword')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePassword')}>
            <Text style={styles.text}>{$t('menu.first')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
            <Text style={styles.text}>{$t('profile.updateUser.updateProfile')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  text: {
    ...Fonts.style.h5,
    color: Colors.charcoal,
    marginLeft: 10,
    marginVertical: Metrics.baseMargin
  }
});
