import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {dataProps} from '../types';

export interface EditProps {
  edit: dataProps[];
}

const initialState: EditProps = {
  edit: [],
};

const EditableInput = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setEdit: (state, action: PayloadAction<dataProps[]>) => {
      state.edit = action.payload;
    },
  },
});

export const {setEdit} = EditableInput.actions;
export default EditableInput.reducer;
