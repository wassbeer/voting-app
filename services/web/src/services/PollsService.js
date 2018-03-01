import Api from '@/services/Api'

export default {
  getUserPolls (user) {
    return Api().get('/polls', {
      params: {
        search: user
      }
    })
  },
  getPoll(pollId) {
    return Api().get(`/polls/read/${pollId}`)
  },
  register (poll) {
    return Api().post('/polls/create', poll)
  },
  put (poll) {
    return Api().put(`/polls/update/${poll.id}`, poll)
  },
  delete(poll){
    return Api().delete(`/polls/delete/${poll.id}`, poll)
  }
}