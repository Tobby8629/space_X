import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RocketApi } from '../redux/Rockets/RocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.Rocket.rockets);
  useEffect(() => {
    dispatch((RocketApi()));
  }, [dispatch]);
  const handlecancel = () => {

  };

  const handlereserve = () => {

  };

  return (
    <div>
      {rocket.map((rocket) => (
        <div className="each" key={rocket.id}>
          <div className="image">
            <img src={rocket.images[0]} alt="" />
          </div>
          <div className="text">
            <h3>{rocket.rocket_name}</h3>
            <p>
              {rocket.reserved ? <span className="reserve"> reserved </span> : null}
              {rocket.description}
            </p>

            {rocket.reserved ? <button type="button" onClick={() => handlecancel(rocket.id)}>Cancel Reservation</button> : <button type="button" onClick={() => handlereserve(rocket.id)}>reserve rocket</button> }

          </div>

        </div>
      ))}
    </div>
  );
}

export default Rockets;
