import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addToCollection(state, action) {
      const userAlreadyExist = state.items.find(
        (item) => item.elem.id == action.payload.elem.id,
      );

      if (!userAlreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeFromCollection(state, action) {
      state.items = state.items.filter(
        (item) => item.elem.id !== action.payload.id,
      );
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection(state, action) {
      state.items = [];
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    addedToast() {
      toast.success("Added to Collection ✅", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToast() {
      toast.error("Remove from Collection", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const {
  addToCollection,
  removeFromCollection,
  clearCollection,
  addedToast,
  removeToast,
} = collectionSlice.actions;

export default collectionSlice.reducer;
