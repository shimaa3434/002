let hour= document.querySelector('#hour');
let minu = document.querySelector('#minu');
let second = document.querySelector('#second');
let per = document.querySelector('#per');


const clock = setInterval(() =>{
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let p = 'am';

    (h < 10)? h = `0${h}`: ''; //في حالة ان عدد الساعات اقل من 10 يوضع 0 بجنب الرقم
    (m < 10)? m = `0${m}`: '';//في حالة ان عدد الدقائق اقل من 10 يوضع 0 بجنب الرقم
    (s < 10)? s = `0${s}`: '';//في حالة ان عدد الثواني اقل من 10 يوضع 0 بجنب الرقم
    if(h > 12){
        h = h-12;
        h = `0${h}`;
        p = 'pm';
    };
    

    hour.innerText = h;
    minu.innerText = m;
    second.innerText = s;
    per.innerText = p;

}, 1);