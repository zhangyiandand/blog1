window.addEventListener('load',function () {
    let tag=document.querySelectorAll('.tag>li');
    let index=0;
    tag.forEach(function (ele,index) {
        ele.onclick=function () {
            tag[prev].classList.remove('hot');
            this.classList.add('hot');
            prev=index;
        }
    })
})
/////////////////////修改状态////////////
/*
* 视图->数据
* li->数组元素
* 复选框 ->数组元素status (li->id)
*
* */
/* let checkbox=document.querySelectorAll('input[type=checkbox]');

 checkbox.forEach(ele=>{
     ele.onclick=function () {
         let id=this.parentNode.id;
         let arr = todolist.filter(eles=>eles.id=id)[0];
         // arr.status=true;
         console.log(arr);
     }
 })*/


/* 渲染列表
 render(todolist);
 let doing =todolist.filter(function (ele) {
         return ele.status;
     });
     render(doing);
*/


/* function render(arr) {
   let html='';
   arr.forEach(function (elem,index) {
       if (elem.status) {
           html+=`
         <li>
             <input type="checkbox" checked> <p>${elem.content}</p> <time>${elem.ctime}</time>
         </li>
       `;
       }else {
           html+=`
         <li>
             <input type="checkbox" checked> <p>${elem.content}</p> <time>${elem.ctime}</time>
         </li>
       `;
        }

   })
     content.innerHTML=html;
 }*/