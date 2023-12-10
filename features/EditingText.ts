import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface EditProps {
  editingText: boolean;
}

const initialState: EditProps = {
  editingText: false,
};

const EditingText = createSlice({
  name: 'editingText',
  initialState,
  reducers: {
    setEditingText: (state, action: PayloadAction<boolean>) => {
      state.editingText = action.payload;
    },
  },
});

export const {setEditingText} = EditingText.actions;
export default EditingText.reducer;
