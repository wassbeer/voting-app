import Api from '@/services/Api'

export default {
  signup(credentials){
    return Api().post('/authentication/signup', credentials)
  },
  login (credentials) {
    return Api().post('/authentication/login', credentials)
  },
  verify(jsonwebtoken){
    return Api().post('/authentication/verify', {token: jsonwebtoken})
  }
}

// router.use((req, res, next) => {
//   const token = req.body.token || req.headers['x-access-token'];
//   if (token) {
//       const options = {
//           method: 'post',
//           body: {
//               token: token
//           },
//           url: 'localhost:5000/authentication/verify',
//           json: true;
//       }

//       request(options, (request, response) => {
//           !response.body.success ? res.json({ success: false, message: 'Failed to authenticate token.' }) :
//               req.decoded = decoded;
//           next();
//       })
//   } else {
//       return res.status(403).send({
//           success: false,
//           message: 'No token provided.'
//       });
//   }
// });

