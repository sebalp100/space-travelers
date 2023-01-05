import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDragons } from '../redux/dragon/dragon';
import { getRocket } from '../redux/rocket/rocketSlice';
import '../styles/myProfile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const rockets = useSelector((state) => state.rockets.rocketData);
  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getAllDragons());
    }
  }, [dispatch, dragons.length]);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocket());
    }
  }, [dispatch, rockets.length]);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <section className="profile">
      <div className="container">
        <h2>My Dragons</h2>
        {reservedDragons.length === 0 ? (
          <p>No Booking</p>
        ) : (
          <ul>
            {reservedDragons.map((dragon) => (
              <li key={dragon.id}>{dragon.name}</li>
            ))}
          </ul>
        )}
      </div>
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

export default Profile;
