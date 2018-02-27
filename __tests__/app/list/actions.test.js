import fetchMock from 'fetch-mock'
import {apiAction, apiCallStarted, apiCallSuccess} from '../../../app/list/actions'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([thunkMiddleware]);

test('check API action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const testData = {id: 1};
    fetchMock.get('*', testData);

    const actionResult = store.dispatch(apiAction())
        .then(() => {
            const actions = store.getActions();
            expect(actions.length).toBe(2);
            expect(actions[0]).toEqual(apiCallStarted());
            expect(actions[1]).toEqual(apiCallSuccess(testData));
        });

    fetchMock.restore();
    return actionResult;
});