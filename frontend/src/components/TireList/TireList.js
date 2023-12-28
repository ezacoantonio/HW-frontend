import React from 'react';
import TireCard from './TireCard';

function TireList({ tires }) {
  return (
    <div>
      {tires.map(tire => (
        <TireCard key={tire._id} tire={tire} />
      ))}
    </div>
  );
}

export default TireList;
