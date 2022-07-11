export interface ImportViewMainTypes {
  invoiceItems: InvoiceDataTypes;
  lightMode: boolean;
}

export interface InvoiceViewItemsTypes {
  invoiceItems: InvoiceDataTypes;
  lightMode: boolean;
}

export interface InvoiceViewHeaderTypes {
  invoiceItems: InvoiceDataTypes;
  handleMarkInvoice: (id: string) => InvoiceDataTypes;
  setViewEditInvoice: (viewEdit: boolean) => void;
  setViewDeleteModal: (viewDelete: boolean) => void;
  lightMode: boolean;
}

export interface InvoiceViewBackTypes {
  lightMode: boolean;
}

export interface InvoiceViewTypes {
  invoiceItems: InvoiceDataTypes | any;
  handleDelete: any;
  lightMode: boolean;
  handleMarkInvoice: any;
  handleUpdate: any;
  handleMode: (id: React.MouseEvent) => void;
}
