import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, fetchMissions } from '../redux/missions/missionSlice';

const Mission = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  return (
    <div>
      {missions.error ? (
        <div>
          Error:
          {missions.error}
        </div>
      ) : null}
      {missions && missions.length ? (
        <div className="tableContainer">
          <table>
            <thead>
              <tr className="head">
                <th className="name">Mission</th>
                <th className="desc">Description</th>
                <th className="status">Status</th>
                <th aria-label="Join Mission" />
              </tr>
            </thead>
            <tbody>
              {
                missions.map((user) => (
                  <tr key={user.mission_id}>
                    <td key={user.mission_id} className="missionName">{user.mission_name}</td>
                    <td key={user.description}>{user.description}</td>
                    <td className="member">
                      <button className="memberButton" type="button">NOT A MEMBER</button>
                    </td>
                    <td>
                      <button className="joinButton" type="button" onClick={() => dispatch(joinMission(user.mission_id))}>Join Mission</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Mission;
