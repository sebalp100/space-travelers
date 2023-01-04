import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinDragon } from '../redux/dragon/dragon';

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
                  <div key={dragon.flickr_images} className="slides fade">
                    <img src={image} alt="Dragon" />
                  </div>
                ))}
              </li>
              <li>
                <div className="dragonName">
                  <span className="reservation-text">Reserved</span>
                  {dragon.name}
                </div>
                <div>{dragon.type}</div>
                <div className="reservation-button">
                  <button className="reservation-button" type="button" onClick={() => dispatch(joinDragon(dragon.id))}>
                    Reseve Dragon
                  </button>
                </div>                
              </li>
            </ul>
          ))}
        </div>
      ) : null}
    </>
  );
};
export default Dragons;
