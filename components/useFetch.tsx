import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setTodoArr} from '../features/TodoData';

export default function useFetch(url: string) {
  // function for update info and take data from backend and show in the frontend side
  const dispatch = useDispatch();
  const getTask = async () => {
    try {
      const response = await axios.get(url);

      const data = response.data;
      dispatch(setTodoArr(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return {regetTask: getTask};
}
