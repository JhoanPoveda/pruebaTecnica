export interface IInvoices{
  commerce: ICommerce;
  trans: ITransaction;
  user: IUser;
}

interface ICommerce{
  code: number;
  name?: string;
  nit: string;
  address?: string;
}

interface ITransaction{
  code: number;
  meansPayment?: IMeansPayment;
  state: IState;
  total?: any;
  date?: Date | string;
}

interface IUser{
  id: number;
  name?: string;
  mail: string;
}

export interface IInvocesSearchRequest {
  commerceCode? : number;

}

export interface IState{
  code: number;
  description: string;
}

export interface IMeansPayment{
  code: number;
  description: string;
}
