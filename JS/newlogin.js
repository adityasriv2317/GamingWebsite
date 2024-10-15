let btna = document.getElementById('btn')
let up = document.getElementById('upass').value
let cp = document.getElementById('cpass').value

btna.onclick = function () {
    if (up == cp){
        window.alert(1);
    }
    else{
        window.alert(0);
    }
}