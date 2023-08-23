import { createStore } from 'redux';

// Define an initial state
const initialState = {
  selectedListId: null,
};

// Create a reducer to handle state changes
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_LIST':
      return {
        ...state,
        selectedListId: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
