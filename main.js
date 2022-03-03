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
    alert('아이디를 입력해주세요.')
    e.preventDefault(); // 폼전송막기
  }
  if(passwordValue == ''){
    alert('비밀번호를 입력해주세요.');
    e.preventDefault();
  } else if (passwordValue.length < 6){
    alert('비밀번호는 6자리 이상 입력하세요');
    e.preventDefault();
  }
})

// 다크모드 토글
var count = 0;
var darkmodeBadge = document.getElementById('darkmode');
darkmodeBadge.addEventListener('click', function(){      
  count += 1;
  if(count % 2 == 1){    
    document.getElementById('darkmode').innerHTML = "Light";
    document.body.classList.toggle('dark');
  } else {
    document.getElementById('darkmode').innerHTML = "Dark";
    document.body.classList.toggle('dark');
  }
});







// 변수, 사칙연산 과제
// var 예금액 = 10000;
// var 미래금액 = 0;

// if( 예금액 < 50000 ){
//   미래금액 = 예금액 * 1.15 * 1.15;  
// } else {
//   미래금액 = 예금액 * 1.2 * 1.2;
// }

// console.log(미래금액);



// document.getElementById('email').addEventListener('input', function(){
//   console.log('하잉')
// })

// function 삼육구게임(i){  
//   if (i % 3 == 0 && i % 9 == 0){
//     console.log('박수x2');
//   } else if (i % 3 == 0) {
//     console.log('박수');    
//   } else {
//     console.log('3의배수가 아닙니다');
//   }
// }
// console.log(삼육구게임(11));

// function 합격했니(개론, 민법){
//   if(개론>40 && 민법>40 && 개론+민법>120){
//     console.log('합격');
//   } else {
//     console.log('불합격');
//   }
// }

// console.log(합격했니(50,50));