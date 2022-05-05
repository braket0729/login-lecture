'use strict';

class UserStorage {
  static #users = {
    id: ['김형하', '박미영', '김탑', '김유하'],
    pw: ['1111', '2222', '3333', '5555'],
    name: ['김형하', '박미영', '김탑', '김유하']
  };
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    },{});
    return newUsers;
  }
}

module.exports = UserStorage;