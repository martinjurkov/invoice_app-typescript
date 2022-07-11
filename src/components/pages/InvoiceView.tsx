import React, { useState } from 'react';
import { InvoiceViewTypes } from '../../@types/PagesTypes';

import InvoiceViewMain from './InvoiceViewMain';
import InvoiceViewHeader from './InvoiceViewHeader';
import InvoiceViewItems from './InvoiceViewItems';
import ModalEditInvoice from '../modals/editInvoice/ModalEditInvoice';
import ConfirmDelete from '../modals/ConfirmDelete';
import Navbar from '../Navbar';
import InvoiceViewBack from './InvoiceViewBack';

const InvoiceView: React.FC<InvoiceViewTypes> = ({
  invoiceItems,
  handleDelete,
  lightMode,
  handleMarkInvoice,
  handleUpdate,
  handleMode,
}) => {
  // state for opening modal table for editing data in existing invoice
  const [viewEditInvoice, setViewEditInvoice] = useState<boolean>(false);
  // state for opening modal window for confirmation of deleting invoice from globalState
  const [viewDeleteModal, setViewDeleteModal] = useState<boolean>(false);

  return (
    <>
      <Navbar lightMode={lightMode} handleMode={handleMode} />

      <InvoiceViewBack lightMode={lightMode} />

      <div className='container'>
        <InvoiceViewHeader
          invoiceItems={invoiceItems}
          handleMarkInvoice={handleMarkInvoice}
          setViewEditInvoice={setViewEditInvoice}
          setViewDeleteModal={setViewDeleteModal}
          lightMode={lightMode}
        />

        <main className={`invoice__main ${lightMode && 'reverse'}`}>
          <InvoiceViewMain invoiceItems={invoiceItems} lightMode={lightMode} />
          <InvoiceViewItems invoiceItems={invoiceItems} lightMode={lightMode} />
        </main>

        {viewEditInvoice && (
          <ModalEditInvoice
            setViewEditInvoice={setViewEditInvoice}
            lightMode={lightMode}
            handleUpdate={handleUpdate}
            invoiceItems={invoiceItems}
          />
        )}
        {viewDeleteModal && (
          <ConfirmDelete
            setViewDeleteModal={setViewDeleteModal}
            invoiceItems={invoiceItems}
            handleDelete={handleDelete}
            lightMode={lightMode}
          />
        )}
      </div>
    </>
  );
};

export default InvoiceView;
