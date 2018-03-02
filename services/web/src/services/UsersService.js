import Api from '@/services/Api'

export default {
  get(userId) {
    return Api().get(`/api/users/read/${userId}`)
  },
  delete(userId){
    return Api().delete(`/api/users/delete/${userId}`)
  }
}