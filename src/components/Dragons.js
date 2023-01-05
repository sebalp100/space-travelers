import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { joinDragon, cancelDragon } from '../redux/dragon/dragon';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();
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
          {dragons.map((dragon) => (
            <ul key={dragon.id}>
              <li className="dragonImages">
                {dragon.flickr_images.map((image) => (
                  <div key={nanoid()} className="slides fade">
                    <img src={image} alt="Dragon" />
                  </div>
                ))}
              </li>
              <li>
                <div className="dragonName">
                  {dragon.reserved ? (
                    <span className="reservation-text">Reserved</span>
                  ) : null}
                  {dragon.name}
                </div>
                <div>{dragon.type}</div>
                {!dragon.reserved ? (
                  <div className="reservation-button">
                    <button
                      className="reservation-button"
                      type="button"
                      onClick={() => dispatch(joinDragon(dragon.id))}
                    >
                      Reseve Dragon
                    </button>
                  </div>
                ) : null}
                {dragon.reserved ? (
                  <div className="reservation-button">
                    <button
                      className="reservation-button"
                      type="button"
                      onClick={() => dispatch(cancelDragon(dragon.id))}
                    >
                      Cancel Reservation
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
