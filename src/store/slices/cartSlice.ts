import { createSlice } from '@reduxjs/toolkit';

import { calculateDiscount } from '@/helpers/utility';

interface CartItem {
  id: string;
  title: string;
  discountPercentage: number;
  images: string[];
  rating: number;
  stock: number;
  thumbnail: string;
  price: number;
  image: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as CartItem[],
    totalQty: 0 as number,
    totalPrice: 0 as number,
  },
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.totalQty = state.items.reduce((total, item) => {
        return total + item.quantity;
      }, 0);

      let total: number = 0;
      state.items.map((item) => {
        total =
          total +
          calculateDiscount(item.price, item.discountPercentage) *
            item.quantity;
      });

      state.totalPrice = total;
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1);
      }

      state.totalQty = state.items.reduce((total, item) => {
        return total + item.quantity;
      }, 0);

      let total: number = 0;
      state.items.map((item) => {
        total =
          total +
          calculateDiscount(item.price, item.discountPercentage) *
            item.quantity;
      });

      state.totalPrice = total;
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;

      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = quantity;
      }

      state.totalQty = state.items.reduce((total, item) => {
        return total + item.quantity;
      }, 0);

      let total: number = 0;
      state.items.map((item) => {
        total =
          total +
          calculateDiscount(item.price, item.discountPercentage) *
            item.quantity;
      });

      state.totalPrice = total;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
