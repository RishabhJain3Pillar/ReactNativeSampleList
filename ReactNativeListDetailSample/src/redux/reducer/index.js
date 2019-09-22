import { combineReducers } from 'redux';
import articles from './articleReducer';

//we can add more reducers here
export default combineReducers({
  articles,
});
