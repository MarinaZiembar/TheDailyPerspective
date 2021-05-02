import { combineReducers } from 'redux';



const apiError = (state = false, action) => {
  switch (action.type) {
    case 'API_ERROR':
      return action.error;
    default:
      return state;
  }
}

const apiLoading = (state = false, action) => {
  switch (action.type) {
    case 'API_LOADING':
      return action.loading;
    default:
      return state;
  }
}

const news = (state = [], action) => {
  switch (action.type) {
    case 'API_SUCCESS':
      return action.news
    default:
      return state
  }
}


const category = (state = 0, action) => {
  switch (action.type){
    case 'CATEGORY_SELECTED':
      return action.category;
    default:
      return state
  }
}




export default combineReducers({
  news,
  category,
  apiError,
  apiLoading
})