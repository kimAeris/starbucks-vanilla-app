const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색, 아이콘 겹쳐서 잘 안눌리는 현상 해결
searchEl.addEventListener('click',function(){
    // search 아무곳이나 눌러도 input 이 focus된다
    searchInputEl.focus();
})

// 검색란이 포커스 될 때
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
})

// 검색란에서 포커스가 해제 되었을 때
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();