import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../Components/HomeScreen';
import ScreenTwo from '../Components/Screentwo';
import ScreenThree from '../Components/ScreenThree';
import ScreenFour from '../Components/ScreenFour';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/Screentwo" element={<ScreenTwo />} />
      <Route path="/ScreenThree" element={<ScreenThree />} />
      <Route path="/ScreenFour" element={<ScreenFour />} />
    </Routes>
  );
}
