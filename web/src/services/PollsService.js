import Api from '@/services/Api'

export default {
  getUserPolls (user) {
    return Api().get(`/api/polls/user/${user}`, {
      params: {
        search: user
      }
    })
  },
  getPoll(pollId) {
    return Api().get(`/api/polls/poll/${pollId}`)
  },
  getResult(pollId){
    return Api().get(`/api/polls/result/${pollId}`)
  },
  register (poll) {
    return Api().post('/api/polls/create', poll)
  },
  put (pollId, updates) {
    return Api().put(`/api/polls/update/${pollId}`, updates)
  },
  delete(poll){
    return Api().delete(`/api/polls/delete/${poll}`)
  }
}