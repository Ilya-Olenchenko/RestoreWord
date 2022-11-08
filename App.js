import React, { useState } from 'react'
import Stack from './pages/navigation'
import * as Font from 'expo-font'

export default function App() {
  Font.loadAsync({
    'robot-media': require('./assets/fonts/Roboto-Medium.ttf'),
    'alkalami-regula': require('./assets/fonts/Alkalami-Regular.ttf'),
    'merriweather-regular': require('./assets/fonts/Merriweather-Regular.ttf')

  })

  return (
    <Stack />
  )
}
