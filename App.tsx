/* eslint-disable react-native/no-inline-styles */
import { StatusBar, View } from 'react-native';

import MainNavigator from '@/navigation/MainNavigator';

const App = () => {
  return (
    <>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    </>
  );
};

export default App;
