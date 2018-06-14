import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import videos from './videos';
import user from './user';

const reducer = combineReducers({
  videos,
  navigation,
  user,
})


export default reducer;
