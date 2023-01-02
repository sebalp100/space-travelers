import React from 'react';
import { useSelector } from 'react-redux';

const Mission = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);

  return (
    <div>
      {missions.loading && <div>Loading...</div>}
      {!missions.loading && missions.error ? (
        <div>
          Error:
          {missions.error}
        </div>
      ) : null}
      {!missions.loading && missions.length ? (
        <div className="tableContainer">
          <table>
            <thead>
              <tr className="head">
                <th className="name">Mission</th>
                <th className="desc">Description</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {
                missions.map((user) => (
                  <tr key={user.mission_id}>
                    <td key={user.mission_id}>{user.mission_name}</td>
                    <td key={user.description}>{user.description}</td>
                    <td className="member"><button type="button">Not A Member</button></td>
                    <td>J</td>
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
