import axios from 'axios';
import {useEffect, useState} from 'react';

export default function useFetch() {
  const [saveInfo, setSaveInfo] = useState<[]>([]);

  console.log(saveInfo);

  const getTask = async () => {
    const response = await axios.get('http://192.168.0.101:3001/tasks');
    const data = response.data;
    setSaveInfo(data);
  };
  useEffect(() => {
    getTask();
  }, []);
}
