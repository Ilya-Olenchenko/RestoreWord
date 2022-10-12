import React, { useState } from 'react'
import Stack from './pages/navigation'
import * as Font from 'expo-font'

export default function App() {
  Font.loadAsync({
    'robot-media': require('./assets/fonts/Roboto-Medium.ttf'),
    'alkalami-regula': require('./assets/fonts/Alkalami-Regular.ttf')
  })

  return (
    <Stack />
  )
}
