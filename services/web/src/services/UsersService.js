import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('/user/register', credentials)
  },
  get(userId) {
    return Api().get(`/user/read/${userId}`)
  },
  put (user) {
    return Api().put(`/user/update/${user.id}`, user)
  },
  delete(user){
    return Api().delete(`/user/delete/${user.id}`, user)
  }
}