'use strict';
// userController


const userModel = require('../models/userModel');

//const users = userModel.users;

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get = async (req, res) =>{
  const params = [req.params.id];
  const user = await userModel.getUser(params);
  await res.json(user[0]);
}

const user_create_post = async (req, res) => {
    console.log('name', req.body.name);
    console.log('email', req.body.email);
    console.log('password', req.body.passwd);
    //const params = [ ... req.body]; //modern script
    const params = [req.body.name, req.body.email, req.body.passwd]; //it always have to be an array
    const response = await userModel.addUser(params);
    console.log(response);
    const user = await userModel.getUser([response.insertId]);
    //res.send('With this endpoint you can add users..');
    await res.json(user);
};
   
module.exports = {
  user_list_get,
  user_get,
  user_create_post
};