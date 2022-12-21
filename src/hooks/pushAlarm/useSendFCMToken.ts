import { RefObject, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import messaging from '@react-native-firebase/messaging';

import stringifiedPostMessageObject from '@/utils/bridge/stringifiedPostMessageObject';

const useSendFCMToken = (webViewRef: RefObject<WebView>) => {
  useEffect(() => {
    try {
      const getToken = async () => {
        const token = await messaging().getToken();
        return token;
      };

      const sendToken = async () => {
        const token = await getToken();
        webViewRef.current?.postMessage(stringifiedPostMessageObject({ type: 'FCM_TOKEN', data: token }));
      };

      sendToken();
    } catch (error) {
      console.error(error);
    }
  });
};

export default useSendFCMToken;
