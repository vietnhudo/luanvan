import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  sach: [] 
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    them_giohang: (state, action) => {
      const sanpham = action.payload;
      const inCart = state.cart.find((item) =>
        item._id === sanpham._id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
               item._id === sanpham._id
                ? { ...item, qty: item.qty + 1 }
                : item 
            )
          :  [...state.cart, { ...sanpham, qty: 1 }],
      };
    },
    xoa_giohang: (state, action) => {
      const sanpham = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => (
          item._id !== sanpham._id
          
        )),
      };
    },
    lammoi_giohang: (state) => {
        return{
          ...state,
            cart : []
        } 
    },
    timkiem: (state, action) => {
      const dss = action.payload;
      return{
        ...state,
          sach : dss
      } 
  },
   
  },
});

export const {
    them_giohang,
    xoa_giohang,
    lammoi_giohang,
    timkiem
} = cartSlice.actions;

export default cartSlice.reducer;



