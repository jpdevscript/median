import axios from 'axios';
import { port, hostName } from './constants';

export const getMedianData = async (inputNumber) => {
  try {
    const response = await axios.get(`http://${hostName}:${port}/api/medianPrimeNumber/${inputNumber}`);
    if (response.data.length > 0) {
      return response.data;
    }
  } catch (error) {
    console.log('error.in.response...', error);
    return error;
  }
}