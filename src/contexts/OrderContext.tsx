import { createContext, useState, useEffect, type ReactNode } from 'react';

import { OrderDataInterface } from '@interfaces/OrderDataInterface';
import getMenuItemDetailsData from '@services/getMenuItemDetailsData';

interface OrderProviderProps {
  children: ReactNode;
}

export interface OrderContextData {
  order: OrderDataInterface;
  setOrder: React.Dispatch<React.SetStateAction<OrderDataInterface>>;
}

export const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<OrderDataInterface>({} as OrderDataInterface);

  useEffect(() => {
    handleGetOrderData();
  }, []);

  async function handleGetOrderData(): Promise<void> {
    setOrder({ ...order, loading: true });
    const response = await getMenuItemDetailsData();

    if (response)
      setOrder({
        loading: false,
        name: response.name,
        price: response.price,
        amount: response.amount,
        options: response.options,
        quantity: response.quantity,
        observation: response.observation,
        description: response.description
      });
  }

  return <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>;
}
