import React from 'react';
import LineChart from './LineChart'
import api from '../api'

const DataView = () => {
  return (
    <>
      <LineChart 
          data={api.readFile('./test-data/x-squared-0-to-2.csv')} />
    </>
  );
};

export default DataView;
