import axios from 'axios';
import {useEffect, useState} from 'react';
import {dataProps} from '../types';

export default function useFetch(url: string) {
  const [saveInfo, setSaveInfo] = useState<dataProps[] | []>([]);
  const [progressFunc, setProgressFunc] = useState<boolean>(false);

  // function for update info and take data from backend and show in the frontend side
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
  }, []);

  useEffect(() => {
    if (progressFunc) {
      getTask();
      setProgressFunc(false); // Reset the flag after fetching
    }
  }, [progressFunc]);

  return {saveInfo, regetTask: () => setProgressFunc(true), setSaveInfo};
}
