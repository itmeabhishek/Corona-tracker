import stateReducer from './stateReducer';
import {combineReducers} from 'redux'
const rootReducer = combineReducers({stateReducer:stateReducer});
export default rootReducer;