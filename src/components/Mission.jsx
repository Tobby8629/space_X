import React from 'react';
import { useSelector } from 'react-redux';

function Mission() {
    const list = useSelector((state) => state.Mission.lists )
  return (
    <div className='mii'>
        <ul>
            {list.map((lee)=>(
                <li>{lee}</li>
            ))}
        </ul>
    </div>
  );
}

export default Mission;
