import React from 'react';
import { useFonts } from "expo-font";
import { Nunito_600SemiBold, Nunito_800ExtraBold } from "@expo-google-fonts/nunito";

import ParrotChat from './src/components/ParrotChat';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Nunito_600SemiBold, Nunito_800ExtraBold
  });

  if(!fontsLoaded) return null;

  return <ParrotChat/>
}
