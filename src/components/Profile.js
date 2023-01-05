import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDragons } from '../redux/dragon/dragon';
import { getRocket } from '../redux/rocket/rocketSlice';
import '../styles/myProfile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const missions = useSelector((state) => state.missions.missions);
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

  const reservedMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <div className="listsContainer">
      <div className="container">
        <h2>My Missions</h2>
        {reservedMissions.length === 0 ? (
          <p>No Booking</p>
        ) : (
          <div className="missionList">
            {missions && (
              <ul>
                {
                  reservedMissions.map((mission) => (
                    <li key={mission.mission_id}>
                      {mission.mission_name}
                    </li>
                  ))
                }
              </ul>
            )}
          </div>
        )}
      </div>
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
    </div>
  );
};

export default Profile;
