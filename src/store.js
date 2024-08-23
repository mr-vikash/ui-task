import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: []
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    addWidget(state, action) {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      category.widgets.push(widget);
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
    }
  }
});

export const { setCategories, addWidget, removeWidget } = dashboardSlice.actions;

const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer
  }
});

export default store;
