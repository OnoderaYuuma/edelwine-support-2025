"use strict";

// TOPへ戻るボタンを取得
const btn = document.querySelector('.page-top-btn');
console.log(btn);

// 全体のスクロールが1700を超えたら表示、未満なら非表示
window.addEventListener('scroll', (event) =>{
    if(window.scrollY > 1700){
        // console.log(window.scrollY);
        btn.classList.add('active');
    }else {
        btn.classList.remove('active');
        console.log('削除');

    }
})
