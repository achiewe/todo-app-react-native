import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ValueProps {
  saveValue: string;
}

const initialState: ValueProps = {
  saveValue: '',
};

const SaveInputValue = createSlice({
  name: 'saveValue',
  initialState,
  reducers: {
    setSaveValue: (state, action: PayloadAction<string>) => {
      state.saveValue = action.payload;
    },
  },
});

export const {setSaveValue} = SaveInputValue.actions;
export default SaveInputValue.reducer;
