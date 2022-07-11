import React from 'react';
import { InvoiceStatusGreyTypes } from '../../@types/StatusTypes';

const InvoiceStatusGrey: React.FC<InvoiceStatusGreyTypes> = ({ lightMode }) => {
  return (
    <div className={`invoice__status--grey ${lightMode && 'reverse'}`}>
      <span className={`grey__dot ${lightMode && 'reverse'}`}></span>
      <p>Draft</p>
    </div>
  );
};

export default InvoiceStatusGrey;
