
'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();



const getAllCats = async () => {
  try {
    const [rows] = await promisePool.query('SELECT wop_cat.*, wop_user.name AS ownername FROM wop_cat INNER JOIN wop_user ON wop_cat.owner = wop_user.user_id;');
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'}
  }   
};




const getCat = async (params) => {
  try{
    const [rows] = await promisePool.execute('SELECT * FROM wop_cat WHERE cat_id = ?;', params);
    return rows;
  }catch(e){
    console.log('error', e.message);
    return {error: 'error in database query'};
  };
};




const addCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO wop_cat (name, age, weight, owner, filename, coords) VALUES (?, ?, ?, ?, ?, ?);',
        params);
    return rows;
  }
  catch (e) {
    console.log('error', e.message);
  }
};



  const updateCat = async (params) => {
    try{
      console.log('updateCat function from catModel running');
      const [rows] = await promisePool.execute('UPDATE wop_cat SET name = ?, age = ?, weight = ?, owner = ?  WHERE cat_id = ?;', params);
      //console.log(rows);
      return rows;
    }catch(e) {
      console.log('error', e.message);
      return {error: 'error in database query'};
    }
  }



  const deleteCat = async (params) => {
    try{
      console.log('deleteCat function from catModel running');
      const [rows] = await promisePool.execute('DELETE FROM wop_cat WHERE cat_id = ?;', params);
      //console.log(rows);
      return rows;
    }catch(e) {
      console.log('error', e.message);
      return {error: 'error in database query'};
    }
  }
    
    



module.exports = {
  getAllCats,
  getCat,
  addCat,
  updateCat,
  deleteCat
};
