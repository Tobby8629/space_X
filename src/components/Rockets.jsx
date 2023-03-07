import { useDispatch, useSelector } from 'react-redux';
import { cancel, reserve } from '../redux/Rockets/RocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.Rocket.rockets);
  const handlecancel = (id) => {
    dispatch(cancel(id));
  };

  const handlereserve = (id) => {
    dispatch(reserve(id));
  };

  return (
    <div>
      {rocket.map((rocket) => (
        <div className="each" key={rocket.id}>
          <div className="image">
            <img src={rocket.images[1]} alt="" />
          </div>
          <div className="text">
            <h3>{rocket.rocket_name}</h3>
            <p>
              {rocket.reserve ? <span className="reserve"> reserved </span> : null }
              {rocket.description}
            </p>

            {rocket.reserve
              ? <button type="button" onClick={() => handlecancel(rocket.id)}>Cancel Reservation</button>
              : <button type="button" onClick={() => handlereserve(rocket.id)}>reserve rocket</button> }

          </div>

        </div>
      ))}
    </div>
  );
}

export default Rockets;
