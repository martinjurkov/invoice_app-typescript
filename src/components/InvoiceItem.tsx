import React from 'react';
import { InvoiceItemTypes } from '../@types/ComponentTypes';

import ClickToInvoiceViewIcon from './ClickToInvoiceViewIcon';
import InvoiceStatusOrange from './status/InvoiceStatusOrange';
import InvoiceStatusGreen from './status/InvoiceStatusGreen';
import InvoiceStatusGrey from './status/InvoiceStatusGrey';
import Card from '../shared/Card';

const InvoiceItem: React.FC<InvoiceItemTypes> = ({
  item,
  handleInvoiceView,
  lightMode,
}) => {
  const greyColor = {
    color: '#888eb0',
  };

  const paidStatus = item.status === 'paid';
  const pendingStatus = item.status === 'pending';
  const draftStatus = item.status === 'draft';

  // format amount of money into EUR and into european/slovak style of format number
  const formatter = new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <Card lightMode={lightMode}>
      <div className='card__left'>
        <span>#{item.id} </span>
        <span style={greyColor}>Due {item.paymentDue} </span>
        <span style={greyColor}>{item.clientName} </span>
      </div>
      <div className='card__right'>
        <span style={{ fontSize: '20px' }}>
          {/* total amount of money */}
          {formatter.format(item.itemsQty * item.itemsPrice)}
        </span>
        <div className='card__right--status'>
          {/* determination of invoice status */}
          {paidStatus && <InvoiceStatusGreen />}
          {pendingStatus && <InvoiceStatusOrange />}
          {draftStatus && <InvoiceStatusGrey lightMode={lightMode} />}
        </div>
        <div>
          <ClickToInvoiceViewIcon
            item={item}
            handleInvoiceView={handleInvoiceView}
          />
        </div>
      </div>
    </Card>
  );
};

export default InvoiceItem;
