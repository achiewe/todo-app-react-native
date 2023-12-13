import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// redux state type
export interface ValueProps {
  saveValue: string;
}

// redux state value
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
