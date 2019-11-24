'use strict';
// catController


const catModel = require('../models/catModel');
const userModel = require('../models/userModel');

//const cats = catModel.cats;

// ./controllers/catController.js

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  await res.json(cats);
}

// const cat_list_get = (req, res) => {
//   res.json(cats);
// };

const upload_cat = async (req, res) =>{
    console.log('upload_cat function is running');
    // console.log(req.body);
    // console.log(req.file);
    //const ownerID = await userModel.getUserId([req.body.owner]);
    //console.log(ownerID);
   const params = [req.body.name, req.body.age, req.body.weight, req.body.owner, req.file.filename];
   const response = await catModel.addCat(params);
    //console.log(response);
    const cat = await catModel.getCat([response.insertId]);
    res.json(cat);

    //console.log(req.body);
}

// const user_create_post = async (req, res) => {
//   console.log('name', req.body.name);
//   console.log('email', req.body.email);
//   console.log('password', req.body.passwd);
//   //const params = [ ... req.body]; //modern script
//   const params = [req.body.name, req.body.email, req.body.passwd]; //it always have to be an array
//   const response = await userModel.addUser(params);
//   console.log(response);
//   const user = await userModel.getUser([response.insertId]);
//   //res.send('With this endpoint you can add users..');
//   await res.json(user);
// };

// ./controllers/catController.js

const cat_get = async (req, res) => {
  const params = [req.params.id];
    const cat = await catModel.getCat(params);
    await res.json(cat[0]);
};

const cat_update_get = async(req, res) => {
  const params = [req.body.name, req.body.age, req.body.weight, req.body.owner, req.body.id];
  //console.log(params);  
  const response = await catModel.updateCat(params);
  // console.log('response coming back');
  // console.log('Printing response next line');
  // console.log(response);
  // const cat = await catModel.getCat([response.insertId]);
  // console.log(cat);
  // await res.json(cat[0]);
  res.json(response);
}

const cat_delete = async (req, res) => {
  const params = [req.params.id];
  const cat = await catModel.deleteCat(params);
  await res.json(cat);
}
   
module.exports = {
  cat_list_get,
  upload_cat,
  cat_get,
  cat_update_get,
  cat_delete
};