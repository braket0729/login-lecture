'use strict';

const db = require('../config/db.js');
class UserStorage {
  static getUserInfo(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    })
  }

  static async save(userInfo) {
    const query = 'INSERT INTO users(id, name, password) VALUES(?, ?, ?)';
    return new Promise((resolve, reject) => {
      db.query(
        query, 
        [userInfo.id, userInfo.iname, userInfo.pw], 
        (err) => {
          if (err) reject(`${err}`);
          resolve({success: true});
      });
    })
  }
}

module.exports = UserStorage;