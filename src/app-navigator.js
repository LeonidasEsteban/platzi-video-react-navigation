import { createStackNavigator } from 'react-navigation';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';

const Main = createStackNavigator(
  {
    Home: Home,
    Movie: Movie
  },
)

export default Main;
