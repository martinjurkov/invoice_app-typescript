import React from 'react';
import { ImportViewMainTypes } from '../../@types/PagesTypes';

const ImportViewMain: React.FC<ImportViewMainTypes> = ({
  invoiceItems,
  lightMode,
}) => {
  return (
    <>
      <div className='invoice__header'>
        <div className='invoice__header--left'>
          <span className={`invoice__header--title ${lightMode && 'reverse'}`}>
            #{invoiceItems.id}
          </span>
          <span className='invoice__header--subtitle'>
            {invoiceItems.description}
          </span>
        </div>
        <div className='invoice__header--right'>
          <span>{invoiceItems.senderAddressStreet}</span>
          <span>{invoiceItems.senderAddressCity}</span>
          <span>{invoiceItems.senderAddressPostCode}</span>
          <span>{invoiceItems.senderAddressCountry}</span>
        </div>
      </div>

      <div className='invoice__billing'>
        <div>
          <div className='invoice__billing--info'>
            <span className='invoice__billing--title'>Invoice Date</span>
            <span
              className={`invoice__billing--data ${lightMode && 'reverse'}`}
            >
              {invoiceItems.createdAt}
            </span>
          </div>
          <div className='invoice__billing--info'>
            <span className='invoice__billing--title'>Payment Due</span>
            <span
              className={`invoice__billing--data ${lightMode && 'reverse'}`}
            >
              {invoiceItems.paymentDue}
            </span>
          </div>
        </div>
        <div>
          <div className='invoice__billing--info'>
            <span className='invoice__billing--title'>Bill To</span>
            <span
              className={`invoice__billing--data ${lightMode && 'reverse'}`}
            >
              {invoiceItems.clientName}
            </span>
          </div>
          <div className='invoice__billing--address'>
            <span>{invoiceItems.clientAddressStreet}</span>
            <span>{invoiceItems.clientAddressCity}</span>
            <span>{invoiceItems.clientAddressPostCode}</span>
            <span>{invoiceItems.clientAddressCountry}</span>
          </div>
        </div>
        <div>
          <div className='invoice__billing--info'>
            <span className='invoice__billing--title'>Sent to</span>
            <span
              className={`invoice__billing--data ${lightMode && 'reverse'}`}
            >
              {invoiceItems.clientEmail}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportViewMain;
