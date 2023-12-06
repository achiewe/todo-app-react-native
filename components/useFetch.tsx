import axios from 'axios';
import {useEffect, useState} from 'react';
import {dataProps} from '../types';

export default function useFetch(url: string) {
  const [saveInfo, setSaveInfo] = useState<dataProps[] | []>([]);

  const getTask = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data; // Assuming response.data is an array of dataProps
      setSaveInfo(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getTask();
  }, [url]);

  return {saveInfo}; // Change from {setData} to {data}
}
