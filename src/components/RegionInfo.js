import React from 'react';
import { useSelector } from 'react-redux';

const RegionInfo = () => {
  const regionInfo = useSelector((state) => state.regionInfo);
  const selectedRegion = useSelector((state) => state.selectedRegion);

  return (
    <div className="region-info">
      <h2>Region Info</h2>
      {selectedRegion && regionInfo ? (
        <>
          <p>Currency Symbol: {regionInfo.currencySymbol}</p>
          <p>Speed Unit: {regionInfo.speedUnit}</p>
          <p>Distance Unit: {regionInfo.distanceUnit}</p>
          <p>Volume Unit: {regionInfo.volumeUnit}</p>
          <p>Timezones: {regionInfo.timezones.join(', ')}</p>
        </>
      ) : (
        <p>Please select a region and click 'Load'.</p>
      )}
    </div>
  );
};

export default RegionInfo;
