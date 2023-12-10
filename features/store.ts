import {configureStore} from '@reduxjs/toolkit';
import SaveInputValue, {ValueProps} from './SaveInputValue';
import EditableInput, {EditProps} from './EditableInput';
import EditingText from './EditingText';

const store = configureStore({
  reducer: {
    saveValue: SaveInputValue,
    edit: EditableInput,
    editingText: EditingText,
  },
});

export type Rootstate = {
  saveValue: ValueProps;
  edit: EditProps;
  editingText: EditProps;
};

export default store;
