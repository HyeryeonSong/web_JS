document.querySelector('.navbar-toggler').addEventListener('click', function(){
  document.querySelector('.list-group').classList.toggle('show');
})

document.querySelector('.login__btn').addEventListener('click', function(){
  document.querySelector('.modal__bg').classList.toggle('modal__show');
})

document.querySelector('.modal__close').addEventListener('click', function(){
  document.querySelector('.modal__bg').classList.remove('modal__show');
})

const form = document.querySelector('form');
form.addEventListener('submit', e =>{
  let emailValue = document.getElementById('email').value;
  let passwordValue = document.getElementById('password').value;
  let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  let regPassword = /[A-Z]/;

  if(emailValue == '' || !regEmail.test(emailValue)){
    alert('이메일형식이 아닙니다.')
    e.preventDefault();// 폼전송막기
  }
  if(passwordValue == '' || !regPassword.test(passwordValue)){
    console.log
    alert('비밀번호는 6자리이상, 적어도 대문자 하나가 들어가야 합니다.');
    e.preventDefault();
  } else if (passwordValue.length < 6){
    alert('비밀번호는 6자리 이상 입력하세요');
    e.preventDefault();
  }  
});

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

setTimeout(function(){ // 몇초 후 특정 코드 실행(콜백함수, 시간)
  const alertBox = document.querySelector('.alert');
  alertBox.style.display = "none";
}, 5500) 

setInterval(function(){  // 1초마다 시간이 줄어들게
  let time = document.querySelector('.time');
  if (time.innerText <= 5){               
    time.innerText = time.innerText -1;
    time.innerHTML = time.innerText;    
  } 
}, 1000)

// 이미지 슬라이드
const slideContainer = document.querySelector('.slide__container');
const slideButton1 = document.querySelector('.slide1');
const slideButton2 = document.querySelector('.slide2');
const slideButton3 = document.querySelector('.slide3');

// const nextButton = document.querySelector('.next');

// nextButton.addEventListener('click', nextSlide);
// var current = 1;
// function nextSlide(){    
//   if(current <= 2){
//     slideContainer.style.transform = 'translateX(-' + current + '00vw)';
//     console.log(current)  
//     current += 1;
//     console.log(current)  
//   } 
// }

slideButton1.addEventListener('click', function(){
  slideContainer.style.transform = 'translateX(0vw)';
});
slideButton2.addEventListener('click', function(){
  slideContainer.style.transform = 'translateX(-100vw)';
});
slideButton3.addEventListener('click', function(){
  slideContainer.style.transform = 'translateX(-200vw)';
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