const red = document.getElementById('red');
const black = document.getElementById('black');
const white = document.getElementById('white');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const orange = document.getElementById('orange');

const btn = document.querySelector('.j-btn-set-cookie');


btn.addEventListener("click", setCookie);


function setCookie() {
    if (red.checked){
        cookie_text = "red=checked; max-age=60";
        document.cookie = cookie_text;
        red.disabled=true;    
    }
    if (black.checked){
        cookie_text = "black=checked; max-age=60";
        document.cookie = cookie_text;  
        black.disabled=true;
    }
    if (white.checked){
        cookie_text = "white=checked; max-age=60";
        document.cookie = cookie_text; 
        white.disabled=true; 
    }
    if (blue.checked){
        cookie_text = "blue=checked; max-age=60";
        document.cookie = cookie_text;  
        blue.disabled=true; 
    }
    if (green.checked){
        cookie_text = "green=checked; max-age=60";
        document.cookie = cookie_text;  
        green.disabled=true;
    }
    if (orange.checked){
        cookie_text = "orange=checked; max-age=60";
        document.cookie = cookie_text;  
        orange.disabled=true;   
    }
    console.log(document.cookie);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function init() {
    if (getCookie("red") == "checked"){
        red.checked=true;
        red.disabled=true; 
    }  
    if (getCookie("black") == "checked"){
        black.checked=true;
        black.disabled=true; 
    } 
    if (getCookie("white") == "checked"){
        white.checked=true;
        white.disabled=true; 
    } 
    if (getCookie("blue") == "checked"){
        blue.checked=true;
        blue.disabled=true; 
    } 
    if (getCookie("green") == "checked"){
        green.checked=true;
        green.disabled=true; 
    } 
    if (getCookie("orange") == "checked"){
        orange.checked=true;
        orange.disabled=true; 
    } 
    console.log(document.cookie);
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('Ready!');
    init();
});