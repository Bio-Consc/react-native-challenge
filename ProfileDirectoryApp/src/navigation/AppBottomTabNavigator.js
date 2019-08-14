import { createBottomTabNavigator } from 'react-navigation';

/**
 * Components
 */
import Home from '../components/HomeScreen';

/**
 * @TODO Uncomment when the stack navigator is implemented.
 */
// import DirectoryStackNavigator from './DirectoryStackNavigator';

const BottomTabConfig = {
  Home,

  /**
   * @TODO Uncomment when the stack navigator is implemented.
   */
  // UsersList: DirectoryStackNavigator
};

const RouteConfigs = {
  // initialRouteName: 'Home'
};

export default createBottomTabNavigator(BottomTabConfig, RouteConfigs)