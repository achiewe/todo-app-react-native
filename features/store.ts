import {configureStore} from '@reduxjs/toolkit';
import SaveInputValue, {ValueProps} from './SaveInputValue';
import EditableInput, {EditProps} from './EditableInput';

const store = configureStore({
  reducer: {
    saveValue: SaveInputValue,
    edit: EditableInput,
  },
});

export type Rootstate = {
  saveValue: ValueProps;
  edit: EditProps;
};

export default store;
