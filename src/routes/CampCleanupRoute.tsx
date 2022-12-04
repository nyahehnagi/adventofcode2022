import React, { ReactElement } from 'react';
import CampCleanup from '../components/CampCleanup/CampCleanup';
import day4 from '/data/day4.txt';

const CampCleanupRoute = (): ReactElement => {
  return (
      <>
        <CampCleanup data={day4}/>
      </>
  );

}

export default CampCleanupRoute;