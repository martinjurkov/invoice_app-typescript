import React from 'react';
import { InvoiceViewHeaderTypes } from '../../@types/PagesTypes';
import { Link } from 'react-router-dom';

import InvoiceStatusOrange from '../status/InvoiceStatusOrange';
import InvoiceStatusGreen from '../status/InvoiceStatusGreen';
import InvoiceStatusGrey from '../status/InvoiceStatusGrey';
import Card from '../../shared/Card';

const InvoiceViewHeader: React.FC<InvoiceViewHeaderTypes> = ({
  invoiceItems,
  handleMarkInvoice,
  setViewEditInvoice,
  setViewDeleteModal,
  lightMode,
}) => {
  const paidStatus = invoiceItems.status === 'paid';
  const pendingStatus = invoiceItems.status === 'pending';
  const draftStatus = invoiceItems.status === 'draft';

  return (
    <Card lightMode={lightMode}>
      <div className='invoice__card--left'>
        <p className={`invoice__status ${lightMode && 'reverse'}`}>Status</p>
        <div>
          {/* determination of invoice status */}
          {pendingStatus && <InvoiceStatusOrange />}
          {paidStatus && <InvoiceStatusGreen />}
          {draftStatus && <InvoiceStatusGrey lightMode={lightMode} />}
        </div>
      </div>
      <div className='invoice__card--right'>
        <button
          className={`invoice__btn--edit ${lightMode && 'reverse'}`}
          //   opening modal table for editing data in invoice
          onClick={() => setViewEditInvoice(true)}
        >
          Edit
        </button>
        <button
          className='invoice__btn--delete'
          // opening modal window for confirmation of deleting invoice
          onClick={() => setViewDeleteModal(true)}
        >
          Delete
        </button>
        {(pendingStatus || draftStatus) && (
          <button
            className='invoice__btn--paid'
            // changing status of invoice from 'pending' or 'draft' to 'paid'
            onClick={() => handleMarkInvoice(invoiceItems.id)}
          >
            <Link to='/' className='btn__delete--link'>
              Mark As Paid
            </Link>
          </button>
        )}
      </div>
    </Card>
  );
};

export default InvoiceViewHeader;
