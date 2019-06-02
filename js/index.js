window.onload=function(){
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
//    轮播图
    let index=0;
    let rightBtn=document.querySelector('.rightBtn');
    let leftBtn=document.querySelector('.leftBtn');
    let bannerImg=document.querySelectorAll('.bannerimg > li>a>img');
    console.log(bannerImg);
        rightBtn.onclick=function() {
            index++;
            if (index === bannerImg.length) {
                index = 0;
            }
            bannerImg.forEach(function (ele) {
                ele.style.zIndex = 1;
            })
            bannerImg[index].style.zIndex = 99;
        }
        leftBtn.onclick=function(){
            index--;
            if(index<0){
                index=bannerImg.length-1;
            }
            bannerImg.forEach(function (ele) {
                ele.style.zIndex=1;
            })
            bannerImg[index].style.zIndex=99;
        }


}