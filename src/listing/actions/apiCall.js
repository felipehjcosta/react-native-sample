import axios from 'axios'

const API_CALL_TIMEOUT = 3000

const createUrl = (page = 1) => {
  const key = 'place_name'
  const value = 'rio-de-janeiro'
  const data = {
    encoding: 'json',
    country: 'br',
    pretty: '1',
    listing_type: 'buy',
    action: 'search_listings',
    page: page
  }
  data[key] = value

  const queryString = Object.keys(data).
    map(key => key + '=' + encodeURIComponent(data[key])).
    join('&')

  return `https://api.nestoria.com.br/api?${queryString}`
}

export const apiCall = (page) => {
  return axios.get(createUrl(page), {timeout: API_CALL_TIMEOUT}).then(response => {
    return response.data
  })
}
