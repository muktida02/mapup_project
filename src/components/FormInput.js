import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Select, Button } from 'antd';
import { selectRegion, loadRegionInfo } from '../redux/actions';

const FormInput = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const dispatch = useDispatch();

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleLoadRegion = () => {
    const regionInfo = getRegionInfo(selectedRegion);
    dispatch(selectRegion(selectedRegion));
    dispatch(loadRegionInfo(regionInfo));
  };

  const getRegionInfo = (region) => {
   if (region === 'US') {
      return {
        currencySymbol: '$',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'gallons',
        timezones: ['America/New_York', 'America/Los_Angeles'],
      };
    } else if (region === 'IN') {
      return {
        currencySymbol: '₹',
        speedUnit: 'kmph',
        distanceUnit: 'kilometers',
        volumeUnit: 'liters',
        timezones: ['Asia/Kolkata'],
      };
    } else if (region === 'UK') {
      return {
        currencySymbol: '£',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'liters',
        timezones: ['Europe/London'],
      };
    } else {
      // Default region info for no region selected
      return null;
    }
  };

  return (
    <div>
      <Select value={selectedRegion} onChange={handleRegionSelect}>
        <Select.Option value="US">United States</Select.Option>
        <Select.Option value="IN">India</Select.Option>
        <Select.Option value="UK">United Kingdom</Select.Option>
      </Select>
      <Button onClick={handleLoadRegion} type="primary">
        Load
      </Button>
    </div>
  );
};

export default FormInput;
