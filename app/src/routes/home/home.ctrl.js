'use strict';
const users = {
  id: ['김형하', '박미영', '김탑', '김유하'],
  pw: ['1111', '2222', '3333', '5555']
};
const output = {
  home : (req, res) => {
    res.render('home/index');
  },
  login : (req, res) => {
    res.render('home/login');  
  }
};
const process = {
  login : (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true
        });
      }
    }
    return res.json({
      success: false,
      msg: '로그인 실패'
    });
  }
};

module.exports = {
  output,
  process
};
