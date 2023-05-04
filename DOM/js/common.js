const title = document.getElementById('title');
title.style.color = '#506def';
const liTag = document.getElementsByTagName('li');
liTag[1].style.color = '#19A7CE';
liTag[2].style.color = '#146C94';

// for (let index = 0; index < liTag.length; index++) {
//   if (index % 2 === 1 ){
//     liTag[index].style.backgroundColor = '#E5F9DB';
//   } else {
//     liTag[index].style.backgroundColor = '#A0D8B3';
//   }
// }

const noneLi = document.getElementsByClassName('none-li');
const title2 = document.querySelector('#title');
const li2 = document.querySelectorAll('.none-li');

noneLi[0].style.color = '#fff'


title.textContent = 'change';
title.innerHTML = '<span style="color: #f66ebd" >change again</span>';

const textInputId = document.getElementById('textInputId');
textInputId.setAttribute('placeholder', 'setAttribute로 삽입되었습니다.')

const textInputId2 = document.getElementById('textInputId2');
textInputId2.removeAttribute('placeholder');

const aa = document.getElementById('aa');
// aa.style.textDecoration = 'none';
aa.classList.add('aa');


// ulTag[0].appendChild(createLi);
// ulTag[0].prepend(createLi);
// createLi.remove();

const ulTag = document.getElementsByTagName('ul');

const liChan = document.querySelector('li:nth-child(3)');
const createLi = document.createElement('li');
createLi.innerHTML = '야끼우동'
ulTag[0].insertBefore(createLi, liChan);

for (let index = 0; index < liTag.length; index++) {
  const createLi = document.createElement('li');
  if (index % 2 === 1) {
    liTag[index].style.backgroundColor = '#E5F9DB';
    if (index === 7) {
      const liChan = document.querySelector('li:nth-child(' + index + ')');
      createLi.innerHTML = '잡채밥'
      createLi.style.backgroundColor = '#A0D8B3';
      ulTag[0].insertBefore(createLi, liChan);
    }
  } else {
    liTag[index].style.backgroundColor = '#A0D8B3';
    if (index === 8) {
      const liChan = document.querySelector('li:nth-child(' + index + ')');
      createLi.innerHTML = '동파육'
      createLi.style.backgroundColor = '#E5F9DB';
      ulTag[0].insertBefore(createLi, liChan); }
  }
}