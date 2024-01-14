import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from './apis/productsApi';
import storage from 'redux-persist/lib/storage';

import {
  cartReducer,
  addToCart,
  removeFromCart,
  updateQuantity,
} from './slices/cartSlice';

import {
  wishListReducer,
  addToWishList,
  removeFromWishList,
} from './slices/wishListSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'wishlist'],
};

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: cartReducer,
  wishlist: wishListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware);
  },
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export {
  addToCart,
  removeFromCart,
  updateQuantity,
  addToWishList,
  removeFromWishList,
};

export {
  useFetchProductsQuery,
  useFetchProductQuery,
} from './apis/productsApi';
