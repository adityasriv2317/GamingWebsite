document.addEventListener('DOMContentLoaded', function(){
    let inp = document.getElementById('upass')
    let tick = document.querySelectorAll('#pst')
    let strength = document.getElementById('str')

    let minch = false
    let capch = false
    let numch = false
    let ctrch = false

    let perc = 0

    function on(k){
        tick[k].style.color = 'rgb(213, 255, 213)'
        tick[k].style.textShadow = '0 0 4px black'
    }
    function off(l){
        tick[l].style.color = 'rgb(210, 210, 210)'
        tick[l].style.textShadow = 'none'
    }

    inp.onkeyup = function (){
        minch = false
        capch = false
        numch = false
        ctrch = false
        perc = 0

        for(let i=0; i<inp.value.length; i++){           
            let ch = inp.value.charCodeAt(i);

            // min 6
            if(inp.value.length >=6 ){
                minch = true
            }

            // capital
            if(ch <=90 && ch >=65){
                capch = true
            }

            // num
            if(ch <= 57 && ch>= 48){
                numch = true
            }

            // underscore 95 atrate 64 # 35
            if(ch == 95 || ch == 35 || ch==64){
                ctrch = true
            }
        }

        if(minch){
            on(0)
            perc += 25
        }
        else{
            off(0)            
        }
    
        if(capch){
            on(1)
            perc += 25
        }
        else{
            off(1)
        }
    
        if(numch){
            on(2)
            perc += 25
        }
        else{
            off(2)
        }
    
        if(ctrch){
            on(3)
            perc += 25
        }
        else{
            off(3)
        }

        if(inp.value.length == 0){
            strength.style.display = 'none'
        }
        else{
            strength.style.display = 'block'
            strength.innerHTML = perc + '%'
        }
    }
    
})
