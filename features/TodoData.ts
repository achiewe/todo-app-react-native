import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {dataProps} from '../types';

export interface TodoArrProps {
  todoArr: dataProps[];
}

const initialState: TodoArrProps = {
  todoArr: [],
};

const TodoData = createSlice({
  name: 'todoArr',
  initialState,
  reducers: {
    setTodoArr: (state, action: PayloadAction<dataProps[]>) => {
      state.todoArr = action.payload;
    },
  },
});

export const {setTodoArr} = TodoData.actions;
export default TodoData.reducer;
