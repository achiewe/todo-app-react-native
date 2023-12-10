import {configureStore} from '@reduxjs/toolkit';
import SaveInputValue, {ValueProps} from './SaveInputValue';
import EditableInput, {EditArrProps} from './EditableInput';
import EditingText, {EditProps} from './EditingText';

const store = configureStore({
  reducer: {
    saveValue: SaveInputValue,
    edit: EditableInput,
    editingText: EditingText,
  },
});

export type Rootstate = {
  saveValue: ValueProps;
  edit: EditArrProps;
  editingText: EditProps;
};

export default store;
