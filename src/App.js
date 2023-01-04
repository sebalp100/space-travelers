import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllDragons } from './redux/dragon/dragon';

import Missions from './components/Missions';
import Header from './components/Header';
import Rocket from './components/Rockets';
import Dragons from './components/Dragons';

const App = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    dispatch(getAllDragons());
  }, [dispatch, dragons.refresh]);
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Dragons" element={<Dragons />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
