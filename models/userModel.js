// 'use strict';
// const users = [
//   {
//     id: '1',
//     name: 'John Doe',
//     email: 'john@metropolia.fi',
//     password: '1234',
//   },
//   {
//     id: '2',
//     name: 'Jane Doez',
//     email: 'jane@metropolia.fi',
//     password: 'qwer',
//   },
// ];

// module.exports = {
//   users,
// };


'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT wop_user.user_id, wop_user.name, wop_user.email FROM wop_user');
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'}
  }   
};

const getUser = async (params) => {
  try{
    const [rows] = await promisePool.execute('SELECT wop_user.user_id, wop_user.name, wop_user.email FROM wop_user WHERE user_id = ?;', params);
    return rows;
  }catch(e){
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
    
};

const getUserId = async (params) => {
  try{
    const [rows] = await promisePool.execute('SELECT wop_user.user_id FROM wop_user WHERE name = ?;', params);
    return rows;
  }catch(e){
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
    
};

const addUser = async (params) => {
  try{
    const [rows] = await promisePool.execute('INSERT INTO  wop_user (name, email, password) VALUES (?, ?, ?);', params);
    //const [rows] = await promisePool.execute('INSERT INTO  wop_user (name, email, password) VALUES (?, ?, ?);', params);
    return rows;
  }catch(e){
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  getUserId
};

