import axios from 'axios';
import {useEffect, useState} from 'react';
import {dataProps} from '../types';

export default function useFetch(url: string) {
  const [saveInfo, setSaveInfo] = useState<dataProps[] | []>([]);

  const getTask = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setSaveInfo(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getTask();
  }, [url]);

  return {saveInfo};
}
