import { ADD_ARTICLE } from "../constants/action-types";

// src/js/reducers/index.js
const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      /* 
        The first ...state spread operator takes all the properties and assigns them (in case there were ones other than article for this example)
        Then it overwrites the existing articles with the articles from the initial state + the payload from the action
      */
      return { ...state, articles: [...state.articles, action.payload] }; 
    default:
      return state;
  }
};

export default rootReducer;