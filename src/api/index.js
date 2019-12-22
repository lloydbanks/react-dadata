const API_KEY = 'Token b08fd6e9cdb49a1db527ece79ac850d76bd7b59a'
const API_URL =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party'

export const searchCompanies = ({ query }) => {
  return request(API_URL, { query })
}

export const request = (url = '', data = {}, method = 'POST') => {
  const params = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: API_KEY
    },
    body: JSON.stringify(data)
  }

  return fetch(url, params).then(data => data.json())
}
