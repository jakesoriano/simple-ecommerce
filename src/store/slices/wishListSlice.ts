import { createSlice } from '@reduxjs/toolkit';

interface WishListItem {
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

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [] as WishListItem[],
    totalQty: 0 as number,
  },
  reducers: {
    addToWishList(state, action) {
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

      state.totalQty++;
    },
    removeFromWishList(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1);
      }

      state.totalQty--;
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export const wishListReducer = wishListSlice.reducer;
