window.onload=function() {

    let btnlist=document.getElementsByClassName('btnlist');
    let bannerpoint=btnlist[0].getElementsByTagName('li');
    let rightBtn = document.querySelector('.rightBtn');
    let leftBtn = document.querySelector('.leftBtn');
    let bannerimg = document.querySelectorAll('.bannerimg > li');

    let current=0,next=0;
    let w=bannerimg[0].offsetWidth;
    let flag=true;
    rightBtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next==bannerimg.length){
            next=0;
        }
        bannerimg[next].style.left=w+'px';
        bannerpoint[current].classList.remove('hot');
        bannerpoint[next].classList.add('hot');
        animate(bannerimg[current],{left:-w})
        animate(bannerimg[next],{left:0},function () {
            flag =true;
        });
        current=next;
    }
    leftBtn.onclick=function(){
        if(!flag){
            return;
        }
        next--;
        if(next<0){
            next=bannerimg.length - 1;
        }
        bannerimg[next].style.left=-w+'px';
        bannerpoint[current].classList.remove('hot');
        bannerpoint[next].classList.add('hot');
        animate(bannerimg[current],{left:w});
        animate(bannerimg[next],{left:0},function () {
            flag=true;
        });
        current=next;
    }

    // 点
    let home=document.getElementById('home');
    home.onmouseenter=function(){
        // console.log(home.style);
        home.style.background='#00c1de';
    }
    home.onmouseleave=function(){
        // console.log(home.style);
        home.style.background='white';
    }


    let bannerLeft=document.querySelector('.bannerleft');
    let t=setInterval(rightBtn.onclick,1000);

    bannerLeft.onmouseenter = function () {
        clearInterval(t);
    };
    bannerLeft.onmouseleave = function () {
        t=setInterval(rightBtn.onclick,1000);
    };
    for(let i=0;i<bannerpoint.length;i++){
        bannerpoint[i].onclick=function(){
            if(current === i){
                return;
            }
            next=i;

            if(next >current){
                bannerimg[next].style.left = w + 'px';
                animate(bannerimg[current],{left:-w});
                animate(bannerimg[next],{left:0});
            }else{
                bannerimg[next].style.left = -w + 'px';
                animate(bannerimg[current],{left:w});
                animate(bannerimg[next],{left:0});
            }

            bannerpoint[current].classList.remove('hot');
            bannerpoint[next].classList.add('hot');
            current =next;
        }
    }
    // 列表
    let tabList=document.querySelector('.tabList >li.hot');
    let tablists=document.querySelectorAll('.tabList >li');
    tablists.forEach(function (elem,index) {
        elem.onmouseover=function () {
            for(let i=0;i<tablists.length;i++){
                tablists[i].classList.remove('hot');
            }
            this.classList.add('hot');
        }

    })
    // 下划线
    let diarylist=document.getElementsByClassName('diarylist')[0];

    let listli=diarylist.getElementsByTagName('li');

    for(var i=0;i<listli.length;i++){
        listli[i].onclick=function(){
            for(let j=0;j<listli.length;j++){
                listli[j].style.borderBottom='none';
            }
            this.style.borderBottom='1px  solid  #000';
        }
    }
    let viewH=window.innerHeight;
    let imgs = document.querySelectorAll('.lazyload');
    let positionArr = [];
    imgs.forEach(function (ele){
        let parent =ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop)
    });

    window.onscroll = function () {
        let scrolltop=document.documentElement.scrollTop ||document.body.scrollTop;
        for(let i=0;i<positionArr.length;i++){
            if(scrolltop + viewH >= positionArr[i]+50){
                if(!imgs[i].src){
                    imgs[i].src =imgs[i].getAttribute('aa');
                }
            }
        }

    }
}