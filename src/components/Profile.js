import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocket } from '../redux/rocket/rocketSlice';
import '../styles/myProfile.css';

const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rocketData);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocket());
    }
  }, [dispatch, rockets.length]);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <section>
      <div className="container">
        <h2>My Rockets</h2>
        {reservedRockets.length === 0
          ? <p>No reserved rockets</p> : (
            <ul>
              {reservedRockets.map((rocket) => (
                <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
              ))}
            </ul>
          )}
      </div>
    </section>
  );
};

export default MyProfile;
