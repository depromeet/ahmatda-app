/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';

import StatusBar from '@/components/StatusBar';
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
