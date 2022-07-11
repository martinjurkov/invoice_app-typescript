import React from 'react';
import { ModalNewInvoiceBtnsTypes } from '../../../@types/ModalsTypes';

const ModalNewInvoiceBtns: React.FC<ModalNewInvoiceBtnsTypes> = ({
  setShowNewInvoice,
  submitDraft,
  lightMode,
}) => {
  return (
    <>
      <div className='modal__invoice--btns'>
        <div>
          <button
            type='button'
            className='modal__btn--discard'
            // closing modal window
            onClick={() => setShowNewInvoice(false)}
          >
            Discard
          </button>
        </div>
        <div>
          <button
            type='button'
            className={`modal__btn--draft ${lightMode && 'reverse'}`}
            // saving invoice with "draft" status and closing modal window
            onClick={() => submitDraft()}
          >
            Save as Draft
          </button>
          {/* on submit saving new invoice with "pending" status */}
          <button type='submit' className='modal__btn--save'>
            Save & Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalNewInvoiceBtns;
