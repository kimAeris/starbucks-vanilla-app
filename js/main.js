// 일정 이상 스크롤 했을 때 뱃지 없애기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle( function () {
    console.log(window.scrollY)
    if(window.scrollY > 500 ) {
        // 배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none',
        })
        // 버튼 보이기
        gsap.to(toTopEl, .2, {          // toTopEl 자리에 '#to-top' 도 가능
            x: 0
        })

    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block',
        })
        // 버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}, 300));

// 버튼 눌렀을 때 최상단으로 스크롤
toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    })
})

// 요소들에 지연시간을 추가하여 순차적으로 나타나게 함
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * .7,
        opacity : 1
    })
})


new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper', {
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 5000
    },
    pagination : {
        el: '.promotion .swiper-pagination',
        clickable: true,    //  사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
})

new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,           // 사이사이의 여백
    slidesPerView: 5,           // 한번에 보여줄 슬라이드 개수
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next',
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function (){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
})


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,                // y축으로 20만큼 이동하는 애내매이션
        repeat: -1,             // 무한 반복
        yoyo: true,             // 재생된 애니매이션을 뒤로 재생
        ease: Power1.easeInOut,
        delay: random(0,delay)
    })
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


// 스크롤 애니매이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach( function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,       /* 보여짐의 여부를 감시할 요소를 지정 */
            triggerHook: .8,             
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})
