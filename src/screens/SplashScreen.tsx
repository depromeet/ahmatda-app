/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AnimatedLottieView from 'lottie-react-native';

import splashLottie from '../assets/splash-lottie.json';

import { MainNavigatorParams } from '@/navigation/MainNavigator';

interface Props {
  navigation: StackNavigationProp<MainNavigatorParams>;
}

const SplashScreen = ({ navigation }: Props) => {
  const onSplashFinish = () => {
    navigation.replace('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AnimatedLottieView
        source={splashLottie}
        autoPlay
        duration={2000}
        loop={false}
        onAnimationFinish={onSplashFinish}
        style={{ width: 166, height: 166 }}
      />
    </View>
  );
};

export default SplashScreen;
