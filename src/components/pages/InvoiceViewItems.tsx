import React from 'react';
import { InvoiceViewItemsTypes } from '../../@types/PagesTypes';

const InvoiceViewItems: React.FC<InvoiceViewItemsTypes> = ({
  invoiceItems,
  lightMode,
}) => {
  // format amount of money into EUR and into european/slovak style of format number
  const formatter = new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'EUR',
  });
  return (
    <>
      <div className={`invoice__items ${lightMode && 'reverse'}`}>
        <div className='invoice__items--titles'>
          <div className='invoice__items--1'>
            <span>Item Name</span>
          </div>
          <span className='invoice__items--titlesqty'>QTY.</span>
          <span className='invoice__items--titlesprice'>Price</span>
          <span>Total</span>
        </div>

        <div className={`invoice__items--data ${lightMode && 'reverse'}`}>
          <div className='invoice__items--1'>
            <span>{invoiceItems.itemsName}</span>
          </div>
          <span className='invoice__items--dataqty'>
            {invoiceItems.itemsQty}
          </span>
          <span className='invoice__items--dataprice'>
            {formatter.format(invoiceItems.itemsPrice)}
          </span>
          <span>{formatter.format(invoiceItems.itemsTotal)}</span>
        </div>
      </div>

      <div className={`invoice__total ${lightMode && 'reverse'}`}>
        <span>Amount Due</span>
        <span className='invoice__total--number'>
          {formatter.format(invoiceItems.itemsTotal)}
        </span>
      </div>
    </>
  );
};

export default InvoiceViewItems;
