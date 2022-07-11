import React from 'react';
import { InvoiceViewBackTypes } from '../../@types/PagesTypes';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from '../../assets/icon-arrow-left.svg';

const InvoiceViewBack: React.FC<InvoiceViewBackTypes> = ({ lightMode }) => {
  return (
    <div className={`back__button ${lightMode && 'reverse'}`}>
      {/* going back to invoice list */}
      <button>
        <Link to='/'>
          <ArrowLeftIcon />
        </Link>
      </button>
      <p>Go back</p>
    </div>
  );
};

export default InvoiceViewBack;
