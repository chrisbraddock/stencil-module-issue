import axios from 'axios'

const API = axios.create()

export default function api (endpoint: string) {
    return API.get(endpoint)
}
