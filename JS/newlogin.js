document.addEventListener("DOMContentLoaded", function () {
    let chk = document.getElementById('btn')
    let up = document.getElementById('upass')
    let cp = document.getElementById('cpass')

    chk.onclick = function () {
        if (up.value != cp.value){
            window.alert("Passwords do not match");
        }
        else{
            console.log('same pass')
        }
    }

})
