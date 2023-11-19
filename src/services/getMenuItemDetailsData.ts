import axios from 'axios';
import {} from 'react-router-dom';

import { OrderDataInterface } from '@interfaces/OrderDataInterface';

export default async function getMenuItemDetailsData(): Promise<OrderDataInterface> {
  try {
    const response = await axios.get<OrderDataInterface>(`http://localhost:3001/order`);

    return response.data;
  } catch (error) {
    throw new Error('Faleid fetch infos from Order API.');
  }
}
