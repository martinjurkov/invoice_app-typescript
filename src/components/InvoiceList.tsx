import React from 'react';
import { InvoiceListTypes } from '../@types/ComponentTypes';
import { InvoiceDataTypes } from '../@types/InvoiceDataTypes';

import InvoiceItem from './InvoiceItem';
import InvoiceListEmpty from './InvoiceListEmpty';

const InvoiceList: React.FC<InvoiceListTypes> = ({
  invoice,
  handleInvoiceView,
  lightMode,
}) => {
  if (!invoice || invoice.length === 0) {
    return <InvoiceListEmpty lightMode={lightMode} />;
  }

  return (
    <div>
      {invoice.map((item: InvoiceDataTypes) => (
        <InvoiceItem
          key={item.id}
          item={item}
          handleInvoiceView={handleInvoiceView}
          lightMode={lightMode}
        />
      ))}
    </div>
  );
};

export default InvoiceList;
