import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission, fetchMissions } from '../redux/missions/missionSlice';

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
                missions.map((mission) => (
                  <tr key={mission.mission_id}>
                    <td key={mission.mission_id} className="missionName">{mission.mission_name}</td>
                    <td key={mission.description}>{mission.description}</td>
                    <td className="member">
                      {' '}
                      {!mission.reserved && (<button className="memberButton" type="button">NOT A MEMBER</button>)}
                      {' '}
                      {mission.reserved && (<button className="activeButton" type="button">Active Member</button>)}
                    </td>
                    <td>
                      {!mission.reserved && (
                        <button className="joinButton" type="button" onClick={() => dispatch(joinMission(mission.mission_id))}>Join Mission</button>
                      )}
                      {mission.reserved && (
                        <button type="button" className="leaveButton" onClick={() => dispatch(leaveMission(mission.mission_id))}>Leave Mission</button>
                      )}
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
