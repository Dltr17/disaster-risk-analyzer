import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
    persistStore, 
    persistReducer, 
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import uiReducer from './slices/uiSlice';
import contextReducer from './slices/contextSlice';
import vulnerabilityReducer from './slices/vulnerabilitySlice';
import threatReducer from './slices/threatSlice'; // Import the new reducer

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // Whitelist the slices you want to persist
  whitelist: ['context', 'vulnerability', 'threat'] // Add 'threat' to the whitelist
};

const rootReducer = combineReducers({
    ui: uiReducer,
    context: contextReducer,
    vulnerability: vulnerabilityReducer,
    threat: threatReducer, // Add the new reducer to the root reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
