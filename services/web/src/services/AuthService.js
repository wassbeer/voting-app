import Api from '@/services/Api'

export default {
  login (credentials) {
    return Api().post('/authentication/login', credentials)
  }
}