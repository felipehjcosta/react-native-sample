// @flow
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

  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&')

  return 'https://api.nestoria.com.br/api?' + querystring
}

export const apiCall = () => {
  return fetch(createUrl()).then(response => {
    return response.json()
  })
}
