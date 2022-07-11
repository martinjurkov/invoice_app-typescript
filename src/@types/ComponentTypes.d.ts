export interface NavbarTypes {
  handleMode: (id: React.MouseEvent) => void;
  lightMode: boolean;
}

export interface InvoiceListEmptyTypes {
  lightMode: boolean;
}

export interface InvoiceListTypes {
  invoice: InvoiceDataTypes[];
  handleInvoiceView: (viewInvoicedata: InvoiceDataTypes[]) => void;
  lightMode: boolean;
}

export interface InvoiceItemTypes {
  item: InvoiceDataTypes;
  handleInvoiceView: (viewInvoicedata: InvoiceDataTypes[]) => void;
  lightMode: boolean;
}

export interface HeaderTypes {
  invoice: InvoiceDataTypes[];
  lightMode: boolean;
  handleAdd: (newInvoice: InvoiceDataTypes) => void;
  viewFilterTable: boolean;
  setViewFilterTable: (filter: boolean) => void;
}

export interface FilterTableTypes {
  statusItems: any;
  invoiceData: InvoiceDataTypes[];
  setFilteredData: (filter: InvoiceDataTypes[]) => void;
  filterInvoices: (filter: string) => void;
  lightMode: boolean;
}

export interface ClickToInvoiceViewIconTypes {
  item: any;
  handleInvoiceView: (viewInvoicedata: InvoiceDataTypes[]) => void;
}
