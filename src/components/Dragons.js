import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { joinDragon, cancelDragon } from '../redux/dragon/dragon';
import './Dragon.css';

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
        <div className="dragon-container">
          {dragons.map((dragon) => (
            <div className="dragon-item" key={dragon.id}>
              <div className="dragon-images">
                <AwesomeSlider>
                  {dragon.flickr_images.map((image) => (
                    <div key={dragon.id} data-src={image} />
                  ))}
                </AwesomeSlider>
              </div>
              <div className="dragon-details">
                <div className="dragon-name">
                  {dragon.reserved && (
                    <span className="dragon-badge">Reserved</span>
                  )}
                  {dragon.name}
                </div>
                <div className="dragon-type">{dragon.type}</div>
                {!dragon.reserved && (
                  <button
                    className="reservation-button"
                    type="button"
                    onClick={() => dispatch(joinDragon(dragon.id))}
                  >
                    Reseve Dragon
                  </button>
                )}
                {dragon.reserved && (
                  <button
                    className="dragon-cancel-btn"
                    type="button"
                    onClick={() => dispatch(cancelDragon(dragon.id))}
                  >
                    Cancel Reservation
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};
export default Dragons;
