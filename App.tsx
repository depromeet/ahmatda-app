/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { Alert, SafeAreaView, StatusBar } from 'react-native';
import { getUniqueId } from 'react-native-device-info';
import { WebView } from 'react-native-webview';
import messaging from '@react-native-firebase/messaging';

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

  useEffect(() => {
    const getToken = async () => {
      const token = await messaging().getToken();
      // eslint-disable-next-line no-console
      console.log(token);
    };
    getToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async ({ notification }) => {
      Alert.alert(notification?.title ?? '', notification?.body);
    });

    return unsubscribe;
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
