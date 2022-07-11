export interface InvoiceDataTypes {
  id: string;
  createdAt: any;
  paymentDue: any;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;

  senderAddressStreet: string;
  senderAddressCity: string;
  senderAddressPostCode: string;
  senderAddressCountry: string;

  clientAddressStreet: string;
  clientAddressCity: string;
  clientAddressPostCode: string;
  clientAddressCountry: string;

  itemsName: string;
  itemsQty: number;
  itemsPrice: number;
  itemsTotal: number;

  total: number;
}
