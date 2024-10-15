document.addEventListener("DOMContentLoaded", function () {
    let btna = document.getElementById('btn')
    let up = document.getElementById('upass')
    let cp = document.getElementById('cpass')

    btna.onclick = function () {
        if (up.value == cp.value){
            // window.alert(1);
        }
        else{
            window.alert("Passwords do not match");
        }
    }
})