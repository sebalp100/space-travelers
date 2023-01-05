import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDragons } from '../redux/dragon/dragon';

const Profile = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const missions = useSelector((state) => state.missions.missions);
  const newArray = missions.filter((mission) => mission.reserved);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getAllDragons());
    }
  }, [dispatch, dragons.length]);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <div className="listsContainer">
      <div className="missionsDiv">
        <h2>My Missions</h2>
        {newArray.length === 0 ? (
          <p>No Booking</p>
        ) : (
          <div className="missionList">
            {missions && (
              <ul>
                {
                  newArray.map((mission) => (
                    <li className="missionBox" key={mission.mission_id}>
                      {mission.mission_name}
                    </li>
                  ))
                }
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="missionsDiv">
        <h2>My Dragons</h2>
        {reservedDragons.length === 0 ? (
          <p>No Booking</p>
        ) : (
          <ul>
            {reservedDragons.map((dragon) => (
              <li className="missionBox" key={dragon.id}>{dragon.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="missionsDiv">
        <h2>My Rockets</h2>
      </div>
    </div>
  );
};

export default Profile;
