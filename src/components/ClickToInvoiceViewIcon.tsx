import React from 'react';
import { ClickToInvoiceViewIconTypes } from '../@types/ComponentTypes';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/icon-arrow-right.svg';

const ClickToInvoiceViewIcon: React.FC<ClickToInvoiceViewIconTypes> = ({
  item,
  handleInvoiceView,
}) => {
  return (
    <button
      className='btn__to--invoiceview'
      onClick={() => handleInvoiceView(item)}
    >
      <Link to={`/invoice-view/${item.id}`}>
        <ArrowRightIcon />
      </Link>
    </button>
  );
};

export default ClickToInvoiceViewIcon;
