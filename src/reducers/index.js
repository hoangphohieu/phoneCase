// file này để combine các reducer lại
import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
export default combineReducers({
      items: ItemsReducer
})
