import React from 'react';
import { ReactComponent as DualRing } from '../assets/icon-dual-ring.svg';

const Spinner: React.FC<unknown> = () => {
  return (
    <>
      <div className='overlay loading'></div>
      <div className='loading'>
        <DualRing />
      </div>
    </>
  );
};

export default Spinner;
