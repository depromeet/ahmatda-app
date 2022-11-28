/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { getUniqueId } from 'react-native-device-info';
import { WebView } from 'react-native-webview';

const BASE_URL = 'https://12-team3-web.pages.dev/';
const App = () => {
  useEffect(() => {
    const getDeviceId = async () => {
      const id = await getUniqueId();
      // eslint-disable-next-line no-console
      console.log(id);
    };

    getDeviceId();
  }, []);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: BASE_URL }} />
      </SafeAreaView>
    </>
  );
};

export default App;
