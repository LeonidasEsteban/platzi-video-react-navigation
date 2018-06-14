import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import React from 'react';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from './sections/components/header';
import About from './screens/containers/about';
import Profile from './screens/containers/profile';
import Lucky from './screens/containers/lucky';
import Loading from './screens/containers/loading';
import Login from './screens/containers/login';
import Icon from './sections/components/icon';

const Main = createStackNavigator(
  {
    Home: Home,
    Movie: Movie,
    Category
  },
  {
    navigationOptions: {
      header: Header,
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon="🏠"/>,
      }
    },
    About: {
      screen: About
    },
    Lucky: {
      screen: Lucky
    },
    Profile: {
      screen: Profile
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65a721'
    }
  }
)

const SwitchNavigator = createSwitchNavigator(
  {
    App: TabNavigator,
    Login: Login,
    Loading: Loading,
  },
  {
    initialRouteName: 'Loading',
  }
)

export default SwitchNavigator;
