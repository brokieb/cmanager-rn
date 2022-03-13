import {configureStore} from '@reduxjs/toolkit';

import clientsReducer from './clientReducer';

export default configureStore({
  reducer: {
    clients: clientsReducer,
  },
});
