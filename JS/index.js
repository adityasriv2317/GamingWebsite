let items = document.querySelectorAll('.corousel .cslide .clist .cgame');
let right = document.getElementById('right');
let left = document.getElementById('left');

let coverimg = document.querySelectorAll('.corousel .gcover .cgame .a');

let total = items.length;
let current = 0;

right.onclick  = function(){
    current += 1;
    if(current >= total){
        current = 0;
    }

    show();
}

left.onclick  = function(){
    current = current - 1;
    if(current < 0){
        current = total-1;
    }

    show();
}

let timer = setInterval(() => {
    right.click();
}, 3000)

function show(){
    let now = document.querySelector('.corousel .cslide .clist .cgame.active');
    let nowcover = document.querySelector('.corousel .gcover .cgame .a.active');
    now.classList.remove('active');
    nowcover.classList.remove('active');

    items[current].classList.add('active');
    coverimg[current].classList.add('active');

    clearInterval(timer);
    timer = setInterval(() => {
        right.click();
    }, 3000)
}