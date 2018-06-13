import {
  createNavigationReducer
} from 'react-navigation-redux-helpers';

import AppNavigator from '../src/app-navigator';

const navigationReducer = createNavigationReducer(AppNavigator);
export default navigationReducer;
