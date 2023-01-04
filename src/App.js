import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllDragons } from './redux/dragon/dragon';
import { fetchMissions } from './redux/missions/missionSlice';
import Missions from './components/Missions';
import Header from './components/Header';
import Rocket from './components/Rockets';
import Dragons from './components/Dragons';
import Profile from './components/Profile';

const App = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragonReducer);
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    dispatch(getAllDragons());
    dispatch(fetchMissions());
  }, [dispatch, dragons.refresh, missions.refresh]);
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
