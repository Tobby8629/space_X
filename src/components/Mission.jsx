import { useSelector } from 'react-redux';

function Mission() {
  const mission = useSelector((state) => state.Mission.mission);
  return (
    <div className="mii">
      {mission.map((miss) => (
        <div className="amission" key={miss.id}>
          <h3>{miss.name}</h3>
          <div className="text">
            {miss.description}
          </div>
          <div className="status">
            <p>{miss.member ? <span>active member</span> : <span> not a member </span> }</p>
            <div className="btn">
              {miss.member
                ? <button type="button"> leave mission </button>
                : <button type="button"> join mission </button>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mission;
