document.querySelector('.navbar-toggler').addEventListener('click', function(){
  document.querySelector('.list-group').classList.toggle('show');
})

document.querySelector('.login__btn').addEventListener('click', function(){
  document.querySelector('.modal__bg').classList.toggle('modal__show');
})

document.querySelector('.modal__close').addEventListener('click', function(){
  document.querySelector('.modal__bg').classList.remove('modal__show');
})



$('form').on('submit', function(e){
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  console.log(passwordValue.length);
  if(emailValue == ''){
    alert('아이디 입력안함')
    e.preventDefault();
  }
  if(passwordValue == ''){
    alert('비번입력안함');
    e.preventDefault();
  } else if (passwordValue.length < 6){
    alert('비밀번호는 6자리 이상 입력하세요');
    e.preventDefault();
  }
})