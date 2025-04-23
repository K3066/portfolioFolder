import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const api = axios.create({
  baseURL: 'https://api.example.com'
})

const mock = new MockAdapter(api as never, { delayResponse: 1 })

mock.onGet('/user').reply(200, {
  name: 'Emma Hanssen',
  specialization: 'Photographer'
})

mock.onPost('/user').reply(config => {
  const data = JSON.parse(config.data)
  console.log('Получены данные формы:', data)
  return [200, { success: true }]
})

export default api
