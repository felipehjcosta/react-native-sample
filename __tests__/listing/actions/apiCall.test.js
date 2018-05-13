import moxios from 'moxios'
import { apiCall } from '../../../src/listing/actions/apiCall'

beforeEach(() => moxios.install())

afterEach(() => moxios.uninstall())

test('check API call', () => {
  const sutbUrl = 'https://api.nestoria.com.br/api?encoding=json&country=br&pretty=1&listing_type=buy&action=search_listings&page=1&place_name=rio-de-janeiro'
  const testData = {id: 1}
  moxios.stubRequest(sutbUrl, {
    status: 200,
    response: testData
  }, 5)

  const apiResult = apiCall().then(response => {
    expect(response).toEqual(testData)
  })

  return apiResult
})
