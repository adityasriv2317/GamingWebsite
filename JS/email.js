document.addEventListener('DOMContentLoaded', function(){
    let em = [document.getElementById('umail'), document.getElementById('omail')]
    let btn = document.querySelectorAll('.mcheck')

    let sym = true
    let d = 0

    btn.forEach((b, i) =>{
        b.onclick = function(){
            sym = false
            d =0
            let m = em[i]

            for(let j=1; j<m.value.length - 2; j++){
                let ch = m.value.charCodeAt(j)

                if(ch == 64){
                    if(!sym && d <= i){
                        d = i
                        sym = true
                    }
                    else if(sym){
                        sym = false
                        break
                    }
                    else{
                        break
                    }
                }

                if(ch == 46){
                    if(sym && d<=i){
                        continue
                    }
                    else{
                        break
                    }
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