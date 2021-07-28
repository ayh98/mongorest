const  { Router } = require('express');
const   userRouter  = Router();
const  { createUser, findUser } = require('./users.controller');
userRouter.post('/users', createUser);
userRouter.get('/users/:username', findUser);
module.exports = userRouter;