import React from 'react';
import { InvoiceListEmptyTypes } from '../@types/ComponentTypes';
import { ReactComponent as IllustrationEmpty } from '../assets/illustration-empty.svg';

const InvoiceListEmpty: React.FC<InvoiceListEmptyTypes> = ({ lightMode }) => {
  return (
    <div className={`invoice__list--empty ${lightMode && 'reverse'}`}>
      <IllustrationEmpty />
      <h2 style={{ padding: '50px 0 30px 0' }}>There is nothing here</h2>
      <p>
        Create an invoice by clicking the New Invoice button and get started
      </p>
    </div>
  );
};

export default InvoiceListEmpty;
