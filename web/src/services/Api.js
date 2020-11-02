import axios from 'axios'
import { apigateway } from '../../../config/config.dev.js'

export default () => {
    return axios.create({
        baseURL: `http://localhost:${apigateway.port}/`
    })
}