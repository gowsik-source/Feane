
console.log('welcome')
let bar_icon = document.getElementsByClassName('bar_icon')[0];
let x_icon = document.getElementsByClassName('x_icon')[0];
x_icon.style.display = 'none'

function changecheck() {
    let bar = document.getElementById('check').checked;
    // console.log('bar',bar)
    if (bar) {
        bar_icon.style.display = 'none'
        x_icon.style.display = 'block'
    }
    else {
        bar_icon.style.display = 'block'
        x_icon.style.display = 'none'
    }

}