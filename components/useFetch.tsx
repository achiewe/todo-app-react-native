import axios from 'axios';
import {useEffect} from 'react';

export default function useFetch() {
  useEffect(() => {
    const getTask = async () => {
      const response = await axios.get('http://192.168.0.101:3001/tasks');
    };
  }, []);
}
