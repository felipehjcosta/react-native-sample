import fetchMock from 'fetch-mock'
import {apiCall} from '../../../app/list/items'

test('check API call', () => {
    const testData = {id: 1};
    fetchMock.get('*', testData);

    const apiResult = apiCall().then(response => {
        expect(response).toEqual(testData)
    });

    fetchMock.restore();
    return apiResult;
});