document.addEventListener("DOMContentLoaded", function(){
    let p = document.querySelectorAll('.psf')
    let e = document.querySelectorAll('.eye')

    // accessing each eye button
    e.forEach((a, i) => {

        // observe click on button a and index i
        a.addEventListener("click", function(){

            // b is input field related to button a i index
            let b = p[i]

            // changing the input field accordingly
            if(b.type == 'text'){
                b.type = 'password'
            }
            else{
                b.type = 'text'
            }
        })
    });
})