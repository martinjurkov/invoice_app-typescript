import React from 'react';
import { ModalMessageErrorTypes } from '../../@types/ModalsTypes';

const ModalMessageError: React.FC<ModalMessageErrorTypes> = ({
  setMessageError,
  lightMode,
}) => {
  return (
    <>
      <div className='overlay delete' />
      <div className={`modal__message ${lightMode && 'reverse'}`}>
        <p style={{ marginBottom: '20px' }}>All items are required!</p>
        <div>
          <button
            className={`invoice__btn--edit ${lightMode && 'reverse'}`}
            onClick={() => setMessageError(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalMessageError;
