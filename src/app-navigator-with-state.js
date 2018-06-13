import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavigator from './app-navigator';
import {
  createReduxBoundAddListener,
  initializeListeners,
} from 'react-navigation-redux-helpers';

const addListener = createReduxBoundAddListener('root');

class AppNavigatorWithState extends Component {
  componentDidMount() {
    initializeListeners('root', this.props.navigation);
  }
  render() {
    const navigation = {
      dispatch: this.props.dispatch,
      state: this.props.navigation,
      addListener
    }
    return (
      <AppNavigator
        navigation={navigation}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState)
