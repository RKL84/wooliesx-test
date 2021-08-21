import axios from 'axios';
import config from '../config';

export const calculateTrolleyTotal = async (trolley): Promise<number> => {
  const resp = await axios.post(`${config.resourceUri.trolley}?token=${config.secret.token}`, trolley);
  return resp.data;
};
