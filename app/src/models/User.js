'user strict';

const UserStorage = require('./userStorage');
class User {
  constructor(body) {
    this.body = body;
  }
  login(){
    const {id, pw} = UserStorage.getUserInfo(this.body.id);
    const body = this.body;
    if (id) {
      if (id === body.id && pw === body.pw) {
        return{success: true};
      }      return{success: false, msg: '비밀번호가 틀렸습니다.'}
    }
    return{success: false, msg: '존재하지 않는 아이디 입니다.'}
  };
}

module.exports = User;