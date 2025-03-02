import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../Components/HomeScreen';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
}
