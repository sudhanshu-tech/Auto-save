import { createStore } from 'redux';

const initialState = {
  title: '',
  content: '',
};

const SET_TITLE = 'SET_TITLE';
const SET_CONTENT = 'SET_CONTENT';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;