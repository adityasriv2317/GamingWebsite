document.addEventListener("DOMContentLoaded", function(){
    let p = document.querySelectorAll('.psf')
    let e = document.querySelectorAll('.eye')

    e.forEach((a, i) => {
                
        a.addEventListener("click", function(){
            let b = p[i]
            if(b.type == 'text'){
                b.type = 'password'
            }
            else{
                b.type = 'text'
            }
        })
    });
})