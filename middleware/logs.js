


// MiddleWare
/*
- Request
- Middleware
- Response
*/
function userCredentials(req, res, next) {
    console.log('username: (alex)');
    console.log('email: (alexasd@gmail.com');
    console.log('password: (54984ad)');
    console.log('age: (23)');
    next()
}

export default userCredentials;