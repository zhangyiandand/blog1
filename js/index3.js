window.onload=function() {
    let home = document.getElementById('home');
    let bannerPoint = document.getElementsByClassName('point');
    // let activeColor = '#046b80';
    // let disActiveColor = '#ffffff';
    home.onmouseenter = function () {
        home.style.color = 'red';
    }
    home.onmouseleave = function () {
        home.style.color = '#ffffff';
    }
    // for (let i = 0; i < bannerPoint.length; i++) {
    //     bannerPoint[i].onmouseenter = function () {
    //         this.style.backgroundColor = activeColor;
    //     }
    //     bannerPoint[i].onmouseleave = function () {
    //         this.style.backgroundColor = disActiveColor;
    //     }
    // }

    let diaryList = document.getElementsByClassName('diaryList')[0];
    let listLi = diaryList.getElementsByTagName('li');
    for (let i = 0; i < listLi.length; i++) {
        listLi[i].onclick = function () {
            for (let j = 0; j < listLi.length; j++) {
                listLi[j].style.borderBottom = 'none';
            }
            this.style.borderBottom = '2px solid #000';
        }
    }

    let tabList = document.querySelectorAll('.diaryContent');
    tabList.forEach(function (elem, index) {
        elem.onmouseenter = function () {
            for (let i = 0; i < tabList.length; i++) {
                tabList[i].classList.remove('hot');
            }
            this.classList.add('hot');
        }
    })
    // let index = 0;
    let current = 0, next = 0;
    let rightBtn = document.querySelector('.rightBtn');
    let bannerImg = document.querySelectorAll('.bannerLeft>ul>li');
    let w = bannerImg[0].offsetWidth;
    rightBtn.onclick = function () {
        next++;
        if (next >= bannerImg.length) {
            next = 0;
        }
        bannerPoint[current].classList.remove('pointer');
        bannerPoint[next].classList.add('pointer');
        bannerImg[next].style.left = w + 'px';
        animate(bannerImg[current], {left: -w});
        animate(bannerImg[next], {left: 0});
        current = next;
    }
    // rightBtn.onclick = function () {
    //     index++;
    //     if (index == bannerImg.length) {
    //         index = 0;
    //     }
    //     bannerImg.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     })
    //     bannerImg[index].style.zIndex = 99;
    //
    //
    // }
    // let index1 = 0;
    let leftBtn = document.querySelector('.leftBtn');
    leftBtn.onclick = function () {
        next--;
        if (next < 0) {
            next = bannerImg.length - 1;
        }
        bannerPoint[current].classList.remove('pointer');
        bannerPoint[next].classList.add('pointer');
        bannerImg[next].style.left = -w + 'px';
        animate(bannerImg[current], {left: w});
        animate(bannerImg[next], {left: 0});
        current = next;
    }
    // console.log(leftBtn);
    // leftBtn.onclick = function () {
    //     index1--;
    //     if (index1 < 0) {
    //         index1 = bannerImg.length - 1;
    //     }
    //     bannerImg.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     })
    //     console.log(index1);
    //     bannerImg[index1].style.zIndex = 99;
    // }
    let bannerLeft = document.querySelector('.bannerLeft');
    let t = setInterval(rightBtn.onclick, 3000);
    bannerLeft.onmouseenter = function () {
        clearInterval(t);
    }
    bannerLeft.onmouseleave = function () {
        t = setInterval(rightBtn.onclick, 3000);
    }

    for (let i = 0; i < bannerPoint.length; i++) {
        bannerPoint[i].onclick = function () {
            if (current === i) {
                return;
            }
            next = i;
            if (next > current) {
                bannerImg[next].style.left = w + 'px';
                animate(bannerImg[current], {left: -w});
                animate(bannerImg[next], {left: 0});
            } else {
                bannerImg[next].style.left = -w + 'px';
                animate(bannerImg[current], {left: w});
                animate(bannerImg[next], {left: 0});
            }
            bannerPoint[current].classList.remove('pointer');
            bannerPoint[next].classList.add('pointer');
            current=next;
        }
    }
    //优化前端，减少请求次数
    window.onscroll=function () {

    }
}