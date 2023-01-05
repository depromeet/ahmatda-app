import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import HomeScreen from '@/screens/HomeScreen';
import SplashScreen from '@/screens/SplashScreen';

export type MainNavigatorParams = {
  Home: undefined;
  Splash: undefined;
};

const StackNavigator = createStackNavigator<MainNavigatorParams>();

const screenOptions: StackNavigationOptions = {
  presentation: 'transparentModal',
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name="Splash" component={SplashScreen} options={screenOptions} />
        <StackNavigator.Screen name="Home" component={HomeScreen} options={screenOptions} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
