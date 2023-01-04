import React from 'react';
import { useSelector } from 'react-redux';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  return (
    <>
      {dragons.loading && <div>Loading...</div>}
      {!dragons.loading && dragons.error ? (
        <div>
          Error:
          {dragons.error}
        </div>
      ) : null}
      {!dragons.loading && dragons.length ? (
        <div className="tableContainer">
          {dragons.map((user) => (
            <ul key={user.id}>
              <li className="dragonImages">
                {user.flickr_images.map((image) => (
                  <div key={user.flickr_images} className="slides fade">
                    <img src={image} alt="Dragon" />
                  </div>
                ))}
              </li>
              <li>
                <div className="dragonName">
                  {' '}
                  {user.reserved && user.reserved ? (<span className="reservation-text">Reserved</span>) : null}
                  {' '}
                  {user.name}
                </div>
                <div>{user.type}</div>
                {!user.reserved ? (
                  <div className="reservation-button">
                    <button className="reservation-button" type="button">
                      Reseve Dragon
                    </button>
                  </div>
                ) : null}
                {user.reserved && user.reserved ? (
                  <div className="cancel-reservation-button">
                    <button className="cancel-reservation-button" type="button">
                      Cancel reservation
                    </button>
                  </div>
                ) : null}
              </li>
            </ul>
          ))}
        </div>
      ) : null}
    </>
  );
};
export default Dragons;
