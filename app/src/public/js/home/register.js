"use strict";

const id = document.querySelector('#id');
const iname = document.querySelector('#iname');
const pw = document.querySelector('#pw');
const conpw = document.querySelector('#conpw');
const signUpBtn = document.querySelector('#button');

signUpBtn.addEventListener('click', register);
function register(){
  const req = {
    id: id.value,
    iname: iname.value,
    pw: pw.value,
    conpw: conpw.value
  };
  console.log(req);
  // fetch('/register', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(req),
  // })
  // .then((res) => res.json())
  // .then((res) => {
  //   if(res.success) {
  //     location.href = '/'
  //   } else {
  //     alert(res.msg);
  //   }
  // })
  // .catch((err) => {
  //   console.error('등록 중 에러 발생');
  // })
};