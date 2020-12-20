import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MainScreen from './main/index';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        headerTitle: 'Title',
        headerStyle: {
          elevation: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
      }),
    },
  },
  {
    initialRouteName: 'Main',
  },
);
export const AppContainer = createAppContainer(AppNavigator);
