"use strict";

const id = document.querySelector('#id');
const iname = document.querySelector('#iname');
const pw = document.querySelector('#pw');
const conpw = document.querySelector('#conpw');
const signUpBtn = document.querySelector('#button');

signUpBtn.addEventListener('click', register);
function register() {
  if (!id.value) return alert('아이디를 입력해 주세요.');
  if (pw.value !== conpw.value) return alert('비밀번호 확인이 일치하지 않습니다.');
  
  const req = {
    id: id.value,
    iname: iname.value,
    pw: pw.value,
  };
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.success) {
      location.href = '/login'
    } else {
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error('등록 중 에러 발생');
  })
};