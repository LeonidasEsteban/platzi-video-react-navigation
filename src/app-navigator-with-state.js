import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavigator from './app-navigator';
import {
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp {

}

function mapStateToProps(state) {
  return {
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState)
