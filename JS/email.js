document.addEventListener('DOMContentLoaded', function(){
    let em = [document.getElementById('umail'), document.getElementById('omail')]
    let btn = document.querySelectorAll('.mcheck')

    let sym = true

    btn.forEach((b, i) =>{
        b.onclick = function(){
            sym = false
            let m = em[i]

            for(let j=1; j<m.value.length - 2; j++){
                let ch = m.value.charCodeAt(j)

                if(ch == 64){
                    sym = true
                }
            }

            if(sym == false){
                window.alert('Enter valid email')
            }
            else{
                console.log("ok")
            }
        }
    })
})