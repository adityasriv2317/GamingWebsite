document.addEventListener("DOMContentLoaded", function(){
    let ratings = document.querySelectorAll(".rating");

    ratings.forEach(rate => {
        let star = rate.querySelectorAll(".s");

        star.forEach((st, vl) =>{
            st.addEventListener("click", function(){
                star.forEach(i => {
                    i.querySelector(".full").style.display = "none";
                });

                for (let j = 0; j<= vl; j++){
                    star[j].querySelector(".full").style.display = "block"
                }
            })
        })
    })
})