import Api from '@/services/Api'

export default {
  get(userId) {
    return Api().get(`/users/read/${userId}`)
  },
  put (user) {
    return Api().put(`/users/update/${user.id}`, user)
  },
  delete(user){
    return Api().delete(`/users/delete/${user.id}`, user)
  }
}