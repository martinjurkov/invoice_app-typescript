import React, { useState, useEffect } from 'react';
import { InvoiceDataTypes } from './@types/InvoiceDataTypes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import InvoiceData from './data/InvoiceData';
import Header from './components/Header';
import InvoiceList from './components/InvoiceList';
import FilterTable from './components/FilterTable';
import InvoiceView from './components/pages/InvoiceView';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  // global state for initial data and for manipulating with data, data are from localStorage (initial data from InvoiceData)
  const [invoiceData, setInvoiceData] = useState<InvoiceDataTypes[]>(
    JSON.parse(localStorage.getItem('data') || '[]') || InvoiceData
  );
  // empty object as a place for pushing data from single invoice for reading in invoice detail
  const [viewSingleInvoice, setViewSingleInvoice] = useState<
    InvoiceDataTypes | {}
  >({});
  // state for filtering data
  const [filteredData, setFilteredData] =
    useState<InvoiceDataTypes[]>(invoiceData);
  // state for displaying a filter table
  const [viewFilterTable, setViewFilterTable] = useState<boolean>(false);
  // state for switching light and dark mode for a whole app
  const [lightMode, setLightMode] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // after changes in globalState a new data is set into localStorage
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(invoiceData));
  }, [invoiceData]);

  // displaying details of single invoice
  const viewInvoice = (viewInvoiceData: InvoiceDataTypes | {}) => {
    setViewSingleInvoice(viewInvoiceData);
    window.scrollTo(0, 0);
  };

  // adding invoice to invoiceData
  const addInvoice = (newInvoice: InvoiceDataTypes) => {
    newInvoice.id = Math.random().toString(36).substring(2, 7).toUpperCase();
    setInvoiceData([newInvoice, ...invoiceData]);
  };

  // updating data in single invoice in invoiceData
  const updateInvoice = (newInvoice: InvoiceDataTypes) => {
    const newInvoices = invoiceData.map((invoice: InvoiceDataTypes) => {
      if (newInvoice.id === invoice.id) {
        return newInvoice;
      }
      return invoice;
    });

    setInvoiceData(newInvoices);
  };

  // deleting invoice from invoiceData
  const deleteInvoice = (id: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setInvoiceData(
        invoiceData.filter((invoice: InvoiceDataTypes) => invoice.id !== id)
      );
    }, 2000);
  };

  // chnging status in single invoice from 'pending' or 'draft' to 'paid'
  const markInvoicePaid = (id: string) => {
    const newInvoices = invoiceData.map((invoice: InvoiceDataTypes) => {
      if (id === invoice.id) {
        return { ...invoice, status: 'paid' };
      }
      return invoice;
    });

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setInvoiceData(newInvoices);
    }, 2000);
  };

  // selecting all possible invoice statuses from invoice list
  const statusItems = [
    ...new Set(invoiceData.map((item: InvoiceDataTypes) => item.status)),
  ];

  // filtering invoice list according to invoice status(paid, pending, draft, all)
  const filterInvoices = (curstat: string) => {
    const newInvoices = invoiceData.filter(
      (item: InvoiceDataTypes) => item.status === curstat
    );
    setFilteredData(newInvoices);
  };

  // toggling between light and dark mode
  const toggleMode = () => {
    setLightMode(!lightMode);
  };

  lightMode
    ? (document.body.style.backgroundColor = '#141625')
    : (document.body.style.backgroundColor = '#fff');

  return (
    <Router>
      <Routes>
        <Route
          // exact
          path='/'
          element={
            <>
              <Header
                handleAdd={addInvoice}
                invoice={invoiceData}
                lightMode={lightMode}
                viewFilterTable={viewFilterTable}
                setViewFilterTable={setViewFilterTable}
              />
              <div className='container'>
                <Navbar handleMode={toggleMode} lightMode={lightMode} />
                <InvoiceList
                  invoice={
                    viewFilterTable === true ? filteredData : invoiceData
                  }
                  handleInvoiceView={viewInvoice}
                  lightMode={lightMode}
                />
              </div>
              {viewFilterTable && (
                <FilterTable
                  invoiceData={invoiceData}
                  setFilteredData={setFilteredData}
                  statusItems={statusItems}
                  filterInvoices={filterInvoices}
                  lightMode={lightMode}
                />
              )}
              {isLoading && <Spinner />}
            </>
          }
        />

        <Route
          path='/invoice-view/:id'
          element={
            <>
              <InvoiceView
                invoiceItems={viewSingleInvoice}
                handleDelete={deleteInvoice}
                lightMode={lightMode}
                handleMarkInvoice={markInvoicePaid}
                handleUpdate={updateInvoice}
                handleMode={toggleMode}
              />
              <Navbar handleMode={toggleMode} lightMode={lightMode} />
              {isLoading && <Spinner />}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
