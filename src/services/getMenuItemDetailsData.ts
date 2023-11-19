import axios from 'axios';

import { OrderDataInterface } from '@interfaces/OrderDataInterface';

export default async function getMenuItemDetailsData(): Promise<OrderDataInterface> {
  try {
    const response = await axios.get<OrderDataInterface>(`${process.env.REACT_APP_JSON_SERVER}/order`);

    return response.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return (window.location = '/error');
    }

    throw new Error('Faleid fetch infos from Order API from json-server.');
  }
}
