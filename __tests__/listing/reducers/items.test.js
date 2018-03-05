import {items, itemsIsLoading} from '../../../src/listing/reducers/items'


test('reducer itemsIsLoading should return the initial state', () => {
    expect(itemsIsLoading(undefined, {})).toEqual(false)
});

test('reducer itemsIsLoading should handle ITEMS_IS_LOADING', () => {
    expect(itemsIsLoading(undefined, {type: 'ITEMS_IS_LOADING', isLoading: true})).toEqual(true)
});

test('reducer items should return the initial state', () => {
    expect(items(undefined, {})).toEqual([])
});

test('reducer items should handle ITEMS_FETCH_DATA_SUCCESS', () => {
    expect(items(undefined, {type: 'ITEMS_FETCH_DATA_SUCCESS', items: {id: 1}})).toEqual({id: 1})
});