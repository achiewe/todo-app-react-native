import {configureStore} from '@reduxjs/toolkit';
import SaveInputValue, {ValueProps} from './SaveInputValue';

const store = configureStore({
  reducer: {
    saveValue: SaveInputValue,
  },
});

export type Rootstate = {
  saveValue: ValueProps;
};

export default store;
