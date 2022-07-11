import React from 'react';
import { FilterTableTypes } from '../@types/ComponentTypes';

const FilterTable: React.FC<FilterTableTypes> = ({
  statusItems,
  invoiceData,
  setFilteredData,
  filterInvoices,
  lightMode,
}) => {
  return (
    <>
      <div className={`filter__table ${lightMode && 'reverse'}`}>
        {/* chosing all invoices that are pushed into globalState */}
        <button onClick={() => setFilteredData(invoiceData)}>All</button>

        {statusItems.map((item: string, id: string) => {
          // chosing invoices that have status of our choice
          return (
            <button key={id} onClick={() => filterInvoices(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FilterTable;
