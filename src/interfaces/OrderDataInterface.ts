export interface OrderDataInterface {
  loading: boolean;
  price: number;
  name: string;
  description: string;
  quantity: number;
  amount: number;
  observation: string;
  options: Array<OptionsInterface>;
}
export interface OptionsInterface {
  name: string;
  description: string;
  hasQuantity: boolean;
  maxOption: number;
  optionIsRequired: boolean;
  optionList: Array<OptionInterface>;
}

export interface OptionInterface {
  label: string;
  price: number;
  saleOriginalPrice: number;
  quantity: number;
}
