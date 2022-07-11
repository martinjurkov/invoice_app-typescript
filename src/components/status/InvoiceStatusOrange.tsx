import React from 'react';

const InvoiceStatusOrange: React.FC<unknown> = () => {
  return (
    <div className='invoice__status--orange'>
      <span className='orange__dot'></span>
      <p>Pending</p>
    </div>
  );
};

export default InvoiceStatusOrange;
