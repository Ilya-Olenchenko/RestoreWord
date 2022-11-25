import React, { useState } from 'react'
import Stack from './pages/navigation'
import * as Font from 'expo-font'
import Apploading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    'robot-media': require('./assets/fonts/Roboto-Medium.ttf'),
    'robot-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'alkalami-regula': require('./assets/fonts/Alkalami-Regular.ttf'),
    'merriweather-regular': require('./assets/fonts/Merriweather-Regular.ttf')
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (fontsloaded) {
    return (
      <Stack />
    );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}
