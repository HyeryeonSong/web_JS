const tabButtons = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');


// for ( let i = 0; i < tabButtons.length; i++ ){
//   tabButtons[i].addEventListener('click', function(){
//     tabClick(i)
//   })
// }

// function tabClick(i){  
//   tabButtons[i].classList.remove('orange');  
//   tabButtons[i].classList.add('orange');
//   tabContent[i].classList.remove('show');
//   tabContent[i].classList.add('show');  
// }



tabButtons.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabContents = document.querySelector(tab.dataset.tabTarget)
    tabContent.forEach(tabContent => {
      tabContent.classList.remove('show')
    })
    tabButtons.forEach(tab => {
      tab.classList.remove('orange')
    })
    tab.classList.add('orange')
    tabContents.classList.add('show')
  })
})


// tabButton[0].addEventListener("click", tabChange1);
// tabButton[1].addEventListener("click", tabChange2);
// tabButton[2].addEventListener("click", tabChange3);



// for( let i = 0; i < tabButtons.length; i++ ){
//   tabButtons.forEach.addEventListener("click", function(){
//     tabButtons[i].classList.remove('orange');
//     tabContent[i].classList.remove('show');
//   })
// }

// function tabChange1(){
//   for ( var i = 0; i < tabButton.length; i++ ) {
//     tabButton[i].classList.remove('orange');
//     tabContent[i].classList.remove('show');
//   }
//   tabButton[0].classList.add('orange');
//   tabContent[0].classList.add('show');
// }

// function tabChange2(){
//   for ( var i = 0; i < tabButton.length; i++ ) {
//     tabButton[i].classList.remove('orange');
//     tabContent[i].classList.remove('show');
//   }
//   tabButton[1].classList.add('orange');  
//   tabContent[1].classList.add('show');
// }

// function tabChange3(){  d
//   for ( var i = 0; i < tabButton.length; i++ ) {
//     tabButton[i].classList.remove('orange');
//     tabContent[i].classList.remove('show');
//   }
//   tabButton[2].classList.add('orange');  
//   tabContent[2].classList.add('show');
// }


// 이벤트 버블링
const tabList = document.querySelector('.list');
tabList.addEventListener('click', function(){
  
})