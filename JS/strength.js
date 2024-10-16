document.addEventListener('DOMContentLoaded', function(){
    let inp = document.getElementById('upass')
    let tick = document.querySelectorAll('#pst')

    var k

    function on(k){
        tick[k].style.color = 'white'
        tick[k].style.textShadow = '0 0 4px black'
    }

    function off(l){
        tick[l].style.color = 'rgb(210, 210, 210)'
        tick[l].style.textShadow = 'none'
    }

    inp.onkeyup = function (){
        for(let i=0; i<inp.value.length; i++){
            let ch = inp.value.charCodeAt(i);

            // min 6
            if(inp.value.length >=6 ){
                on(0)
            }
            else{
                off(0)
            }

            // capital
            if(ch <=90 && ch >=65){
                on(1)
            }
            else{
                off(1)
            }

            // num
            if(ch <= 57 && ch>= 48){
                on(2)
            }
            else{
                off(2)
            }

            // underscore 95 atrate 64 # 35
            if(ch == 95 || ch == 35 || ch==64){
                on(3)
            }
            else{
                off(3)
            }
        }
    }
     
})
