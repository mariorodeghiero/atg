import axios from 'axios'

const api = axios.create({
	baseURL: 'https://www.atg.se/services/racinginfo/v1/api/'
})

export default api
