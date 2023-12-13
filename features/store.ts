import {configureStore} from '@reduxjs/toolkit';
import SaveInputValue, {ValueProps} from './SaveInputValue';
import EditableInput, {EditArrProps} from './EditableInput';
import EditingText, {EditProps} from './EditingText';
import TodoData, {TodoArrProps} from './TodoData';

// store for use the states in the project
const store = configureStore({
  reducer: {
    saveValue: SaveInputValue,
    edit: EditableInput,
    editingText: EditingText,
    todoArr: TodoData,
  },
});

// state type
export type Rootstate = {
  saveValue: ValueProps;
  edit: EditArrProps;
  editingText: EditProps;
  todoArr: TodoArrProps;
};

export default store;
