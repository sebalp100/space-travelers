import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchMissions } from './redux/home/missionSlice';

import Missions from './components/Missions';
import Header from './components/Header';
import Rocket from './components/Rockets';
import Dragons from './components/Dragons';
import Profile from './components/Profile';

const App = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch, missions.refresh]);
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Dragons" element={<Dragons />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
