document.querySelector('.navbar-toggler').addEventListener('click', function(){
  document.querySelector('.list-group').classList.toggle('show');
})

document.querySelector('.login__btn').addEventListener('click', function(){
  document.querySelector('.modal__bg').classList.toggle('modal__show');
})

document.querySelector('.modal__close').addEventListener('click', function(){
  document.querySelector('.modal__bg').classList.remove('modal__show');
})
