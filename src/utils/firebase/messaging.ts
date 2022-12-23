import { RefObject } from 'react';
import WebView from 'react-native-webview';
import messaging from '@react-native-firebase/messaging';

import stringifiedPostMessageObject from '../bridge/stringifiedPostMessageObject';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export async function sendFCMTokenToWebView(webViewRef: RefObject<WebView>) {
  const token = await messaging().getToken();
  webViewRef.current?.postMessage(stringifiedPostMessageObject({ type: 'FCM_TOKEN', data: token }));
}
