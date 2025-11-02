const cookie = document.getElementById('cookie');
const counterSpan = document.getElementById('clicker__counter');

let count = 0; 
let isShrunk = false; 

cookie.addEventListener('click', () => {
    count++;
    counterSpan.textContent = count;

    if (!isShrunk) {
        cookie.style.width = "100px";
        cookie.style.height = "100px";
    } else {
        cookie.style.width = "200px";
        cookie.style.height = "auto";
    }
    isShrunk = !isShrunk;
});
