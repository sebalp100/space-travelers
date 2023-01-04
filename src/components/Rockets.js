import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocket } from '../redux/rocket/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rocketData);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocket());
    }
  }, [dispatch, rockets.length]);

  return (
    <div>
      {rockets.map((e) => (
        <div key={e.rocket_id}>
          <div>{e.rocket_id}</div>
          <div>{e.rocket_name}</div>
          <div>{e.description}</div>
          <div>{e.images}</div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
