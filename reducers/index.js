import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import videos from './videos';

const reducer = combineReducers({
  videos,
  navigation,
})


export default reducer;
