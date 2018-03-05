import fetchMock from 'fetch-mock'
import {apiCall} from '../../../src/listing/actions/apiCall'
import { itemsIsLoading, itemsFetchDataSuccess} from '../../../src/listing/actions/items'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([thunkMiddleware]);

test('check API action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const testData = {id: 1};
    fetchMock.get('*', {response: {listings: testData}});

    const actionResult = store.dispatch(apiCall())
        .then(() => {
            const actions = store.getActions();
            expect(actions.length).toBe(2);
            expect(actions[0]).toEqual(itemsIsLoading());
            expect(actions[1]).toEqual(itemsFetchDataSuccess(testData));
        });

    fetchMock.restore();
    return actionResult;
});