import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDragons } from '../redux/dragon/dragon';

const Profile = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getAllDragons());
    }
  }, [dispatch, dragons.length]);
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
    </section>
  );
};

export default Profile;
