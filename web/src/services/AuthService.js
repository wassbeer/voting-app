import Api from '@/services/Api'

export default {
  signup(credentials){
    return Api().post('/api/authentication/signup', credentials)
  },
  login (credentials) {
    return Api().post('/api/authentication/login', credentials)
  },
  verify(jsonwebtoken){
    return Api().post('/api/authentication/verify', {token: jsonwebtoken})
  },
  update(credentials){
    return Api().put('/api/authentication/update', credentials)
  }
}

