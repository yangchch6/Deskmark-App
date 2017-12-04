import { combineReducers } from 'redux';
import items from './items';
import editor from './editor';

const rootReducer = combineReducers({
	items,
	editor,
})
// 通过redux提供的combineReducers方法将已有的两个reducer组装起来
export default rootReducer;