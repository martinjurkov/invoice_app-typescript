import React from 'react';

const InvoiceStatusGreen: React.FC<unknown> = () => {
  return (
    <div className='invoice__status--green'>
      <span className='green__dot'></span>
      <p>Paid</p>
    </div>
  );
};

export default InvoiceStatusGreen;
