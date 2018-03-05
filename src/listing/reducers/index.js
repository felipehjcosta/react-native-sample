import {combineReducers} from 'redux';
import {items, itemsIsLoading} from './items';

export default combineReducers({
    items,
    itemsIsLoading
});
