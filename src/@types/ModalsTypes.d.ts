export interface ModalMessageErrorTypes {
  setMessageError: (message: boolean) => void;
  lightMode: boolean;
}

export interface ModalMessageTypes {
  setMessage: (message: boolean) => void;
  lightMode: boolean;
}

export interface ConfirmDeleteTypes {
  setViewDeleteModal: (viewDelete: boolean) => void;
  invoiceItems: InvoiceDataTypes;
  handleDelete: (id: string) => InvoiceDataTypes;
  lightMode: boolean;
}

export interface ModalNewInvoiceSenderTypes {
  setTextAddressFrom: (address: string) => void;
  textAddressFrom: string;
  setTextCityFrom: (city: string) => void;
  textCityFrom: string;
  setTextPostcodeFrom: (postcode: string) => void;
  textPostcodeFrom: string;
  setTextCountryFrom: (country: string) => void;
  textCountryFrom: string;
}

export interface ModalNewInvoiceItemsTypes {
  lightMode: boolean;
  setItemsName: (itemsName: string) => void;
  itemsName: string;
  setItemsQty: (itemsQty: number) => void;
  itemsQty: number;
  setItemsPrice: (itemsPrice: number) => void;
  itemsPrice: number;
}

export interface ModalNewInvoiceDateTypes {
  setInvoiceDate: any;
  invoiceDate: number;
  setPaymentTerm: (paymentTerm: number) => void;
  paymentTerm: number;
  setTextProjectDescription: (description: string) => void;
  textProjectDescription: string;
}

export interface ModalNewInvoiceClientType {
  setTextNameTo: (name: string) => void;
  textNameTo: string;
  setTextEmailTo: (email: string) => void;
  textEmailTo: string;
  setTextAddressTo: (address: string) => void;
  textAddressTo: string;
  setTextCityTo: (city: string) => void;
  textCityTo: string;
  setTextPostcodeTo: (postcode: string) => void;
  textPostcodeTo: string;
  setTextCountryTo: (country: string) => void;
  textCountryTo: string;
}

export interface ModalNewInvoiceBtnsTypes {
  setShowNewInvoice: (newInvoice: boolean) => void;
  submitDraft: any;
  lightMode: boolean;
}

export interface ModalNewInvoiceTypes {
  setShowNewInvoice: (show: boolean) => void;
  lightMode: boolean;
  handleAdd: any;
}

export interface ModalEditInvoiceSenderTypes {
  setTextAddressFrom: (address: string) => void;
  textAddressFrom: string;
  setTextCityFrom: (city: string) => void;
  textCityFrom: string;
  setTextPostcodeFrom: (postcode: string) => void;
  textPostcodeFrom: string;
  setTextCountryFrom: (country: string) => void;
  textCountryFrom: string;
}

export interface ModalEditInvoiceItemsTypes {
  setItemsName: (itemsName: string) => void;
  itemsName: string;
  setItemsQty: (itemsQty: number) => void;
  itemsQty: number;
  setItemsPrice: (itemsPrice: number) => void;
  itemsPrice: number;
  lightMode: boolean;
}

export interface ModalEditInvoiceDateTypes {
  setInvoiceDate: (invoiceDate: any) => void;
  invoiceDate: any;
  setPaymentTerm: (paymentTerm: number) => void;
  paymentTerm: number;
  setTextProjectDescription: (description: string) => void;
  textProjectDescription: string;
}

export interface ModalEditInvoiceClientTypes {
  setTextNameTo: (name: string) => void;
  textNameTo: string;
  setTextEmailTo: (email: string) => void;
  textEmailTo: string;
  setTextAddressTo: (address: string) => void;
  textAddressTo: string;
  setTextCityTo: (city: string) => void;
  textCityTo: string;
  setTextPostcodeTo: (postcode: string) => void;
  textPostcodeTo: string;
  setTextCountryTo: (country: string) => void;
  textCountryTo: string;
}

export interface ModalEditInvoiceBtnsTypes {
  setViewEditInvoice: (viewEdit: boolean) => void;
  setMessage: (message: boolean) => void;
  setIsLoading: (loading: boolean) => void;
}

export interface ModalEditInvoiceTypes {
  setViewEditInvoice: (viewEdit: boolean) => void;
  lightMode: boolean;
  handleUpdate: (editInvoice: InvoiceDataTypes) => void;
  invoiceItems: InvoiceDataTypes;
}
