var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

// click the button to show to display
for(item of btn) {
    item.addEventListener('click',(e)=>{
        btntext = e.target.innerText;
        // x=* mutiply
        if(btntext == '×'){
            btntext = '*';
        }
        //  ÷=/ divide
        if(btntext == '÷'){
            btntext = '/';
        }
        screen.value += btntext;
    });
}


//import value of symbol & character in Math with math function

// value of sin
function sin() {
    screen.value = Math.sin(screen.value);
}

// value of cos
function cos() {
    screen.value = Math.cos(screen.value);
}

// value of tan
function tan() {
    screen.value = Math.tan(screen.value);
}

// pow
function pow() {
    screen.value = Math.pow(screen.value,2);
}

// value of square root
function sqrt() {
    screen.value = Math.sqrt(screen.value,2);
}

// value of log
function log() {
    screen.value = Math.sin(screen.value);
}

// value of pi
function pi() {
    screen.value = 3.14159265359;
}

// value of e
function e() {
    screen.value = 2.71828182846;
}

//fact '!' //How fact work
function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

//CE button //How backspace work
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length-1);
}