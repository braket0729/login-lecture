"use sttict";

const id = document.querySelector('#id');
const pw = document.querySelector('#password');
const loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login(){
  const req = {
    id: id.value,
    pw: pw.value
  };
  fatch('/login', {
    method: 'post',
    Headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  });
};