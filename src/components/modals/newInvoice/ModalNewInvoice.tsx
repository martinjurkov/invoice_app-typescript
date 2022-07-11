import React, { useState } from 'react';
import { ModalNewInvoiceTypes } from '../../../@types/ModalsTypes';

import ModalNewInvoiceSender from './ModalNewInvoiceSender';
import ModalNewInvoiceClient from './ModalNewInvoiceClient';
import ModalNewInvoiceDate from './ModalNewInvoiceDate';
import ModalNewInvoiceItems from './ModalNewInvoiceItems';
import ModalNewInvoiceBtns from './ModalNewInvoiceBtns';
import ModalMessageError from '../ModalMessageError';
import Spinner from '../../Spinner';

const ModalNewInvoice: React.FC<ModalNewInvoiceTypes> = ({
  setShowNewInvoice,
  lightMode,
  handleAdd,
}) => {
  // states for inputs in modal window for creating new invoice
  const [textAddressFrom, setTextAddressFrom] = useState<string>('');
  const [textCityFrom, setTextCityFrom] = useState<string>('');
  const [textPostcodeFrom, setTextPostcodeFrom] = useState<string>('');
  const [textCountryFrom, setTextCountryFrom] = useState<string>('');
  const [textNameTo, setTextNameTo] = useState<string>('');
  const [textEmailTo, setTextEmailTo] = useState<string>('');
  const [textAddressTo, setTextAddressTo] = useState<string>('');
  const [textCityTo, setTextCityTo] = useState<string>('');
  const [textPostcodeTo, setTextPostcodeTo] = useState<string>('');
  const [textCountryTo, setTextCountryTo] = useState<string>('');
  const [invoiceDate, setInvoiceDate] = useState<any>('');
  const [paymentTerm, setPaymentTerm] = useState<any>('');
  const [textProjectDescription, setTextProjectDescription] =
    useState<string>('');
  const [itemsName, setItemsName] = useState<string>('');
  const [itemsQty, setItemsQty] = useState<any>('');
  const [itemsPrice, setItemsPrice] = useState<any>('');

  // state for showing error message after failing defining conditions
  const [messageError, setMessageError] = useState<boolean>(false);

  // state for adding a spinner
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const whiteColor = {
    color: '#f8f8fb',
  };

  const blackColor = {
    color: '#000',
  };

  // calculating due date from invoice date and number of days in payment terms
  let day;
  invoiceDate.slice(8, 9) === '0'
    ? (day = invoiceDate.slice(9))
    : (day = invoiceDate.slice(8));

  let month;
  invoiceDate.slice(5, 6) === '0'
    ? (month = invoiceDate.slice(6, 7))
    : (month = invoiceDate.slice(5, 7));

  const year = invoiceDate.slice(0, 4);

  const current = new Date(year, month - 1, day);
  current.setDate(current.getDate() + +paymentTerm!);

  const newDate = `${current.getFullYear()}-${
    current.getMonth() + 1 < 10
      ? '0' + (current.getMonth() + 1)
      : current.getMonth() + 1
  }-${current.getDate() < 10 ? '0' + current.getDate() : current.getDate()}`;

  // putting data from modal table from items into globalState for 'draft' invoice
  const submitDraft = () => {
    const newInvoice = {
      status: 'draft',
      senderAddressStreet: textAddressFrom,
      senderAddressCity: textCityFrom,
      senderAddressPostCode: textPostcodeFrom,
      senderAddressCountry: textCountryFrom,
      clientName: textNameTo,
      clientAddressStreet: textAddressTo,
      clientAddressCity: textCityTo,
      clientAddressPostCode: textPostcodeTo,
      clientAddressCountry: textCountryTo,
      clientEmail: textEmailTo,
      createdAt: invoiceDate,
      paymentTerms: paymentTerm,
      paymentDue: newDate,
      description: textProjectDescription,
      itemsName,
      itemsQty,
      itemsPrice,
      itemsTotal: itemsQty * itemsPrice,
    };

    // pushing data into globalState and closing modal window
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowNewInvoice(false);
      handleAdd(newInvoice);
    }, 2000);
  };

  // putting data from modal table from items into globalState for 'pending' invoice
  const handleNewInvoice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newInvoice = {
      status: 'pending',
      senderAddressStreet: textAddressFrom,
      senderAddressCity: textCityFrom,
      senderAddressPostCode: textPostcodeFrom,
      senderAddressCountry: textCountryFrom,
      clientName: textNameTo,
      clientAddressStreet: textAddressTo,
      clientAddressCity: textCityTo,
      clientAddressPostCode: textPostcodeTo,
      clientAddressCountry: textCountryTo,
      clientEmail: textEmailTo,
      createdAt: invoiceDate,
      paymentTerms: paymentTerm,
      paymentDue: newDate,
      description: textProjectDescription,
      itemsName,
      itemsQty,
      itemsPrice,
      itemsTotal: itemsQty * itemsPrice,
    };

    // condition that for new "real" invoice (not draft) you have to fill every field
    if (
      textAddressFrom.trim().length < 1 ||
      textCityFrom.trim().length < 1 ||
      textPostcodeFrom.trim().length < 1 ||
      textCountryFrom.trim().length < 1 ||
      textNameTo.trim().length < 1 ||
      textAddressTo.trim().length < 1 ||
      textCityTo.trim().length < 1 ||
      textPostcodeTo.trim().length < 1 ||
      textCountryTo.trim().length < 1 ||
      textEmailTo.trim().length < 1 ||
      invoiceDate.trim().length < 1 ||
      paymentTerm.trim().length < 1 ||
      textProjectDescription.trim().length < 1 ||
      itemsName.trim().length < 1 ||
      itemsQty.trim().length < 1 ||
      itemsPrice.trim().length < 1
    ) {
      setMessageError(true);
      window.scrollTo(0, 0);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowNewInvoice(false);
        handleAdd(newInvoice);
      }, 2000);
    }
  };

  return (
    <>
      <div className='overlay' onClick={() => setShowNewInvoice(false)} />
      <div className={`modal__invoice ${lightMode && 'reverse'}`}>
        <div>
          <h2 style={lightMode ? whiteColor : blackColor}>New Invoice</h2>
        </div>
        <div>
          <p className='bill__from--to'>Bill From</p>
        </div>
        <form onSubmit={handleNewInvoice}>
          <ModalNewInvoiceSender
            setTextAddressFrom={setTextAddressFrom}
            textAddressFrom={textAddressFrom}
            setTextCityFrom={setTextCityFrom}
            textCityFrom={textCityFrom}
            setTextPostcodeFrom={setTextPostcodeFrom}
            textPostcodeFrom={textPostcodeFrom}
            setTextCountryFrom={setTextCountryFrom}
            textCountryFrom={textCountryFrom}
          />

          <div>
            <p className='bill__from--to'>Bill To</p>
          </div>
          <ModalNewInvoiceClient
            setTextNameTo={setTextNameTo}
            textNameTo={textNameTo}
            setTextEmailTo={setTextEmailTo}
            textEmailTo={textEmailTo}
            setTextAddressTo={setTextAddressTo}
            textAddressTo={textAddressTo}
            setTextCityTo={setTextCityTo}
            textCityTo={textCityTo}
            setTextPostcodeTo={setTextPostcodeTo}
            textPostcodeTo={textPostcodeTo}
            setTextCountryTo={setTextCountryTo}
            textCountryTo={textCountryTo}
          />

          <ModalNewInvoiceDate
            setInvoiceDate={setInvoiceDate}
            invoiceDate={invoiceDate}
            setPaymentTerm={setPaymentTerm}
            paymentTerm={paymentTerm}
            setTextProjectDescription={setTextProjectDescription}
            textProjectDescription={textProjectDescription}
          />

          <div>
            <p className={`item__list--p ${lightMode && 'reverse'}`}>
              Item List
            </p>
          </div>

          <ModalNewInvoiceItems
            lightMode={lightMode}
            setItemsName={setItemsName}
            itemsName={itemsName}
            setItemsQty={setItemsQty}
            itemsQty={itemsQty}
            setItemsPrice={setItemsPrice}
            itemsPrice={itemsPrice}
          />

          <ModalNewInvoiceBtns
            setShowNewInvoice={setShowNewInvoice}
            submitDraft={submitDraft}
            lightMode={lightMode}
          />
        </form>
      </div>
      {messageError && (
        <ModalMessageError
          lightMode={lightMode}
          setMessageError={setMessageError}
        />
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default ModalNewInvoice;
