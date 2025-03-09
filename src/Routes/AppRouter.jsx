import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../Components/HomeScreen';
import ScreenTwo from '../Components/Screentwo';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/screentwo" element={<ScreenTwo />} />
    </Routes>
  );
}
