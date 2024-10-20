document.addEventListener("DOMContentLoaded", function(){
    // accessing all games
    let ratings = document.querySelectorAll(".rating");

    // method to control all games at once
    ratings.forEach(rate => {

        // accessing all 5 stars individually
        let star = rate.querySelectorAll(".s");

        star.forEach((st, vl) =>{

            // method to observe index of star clicked
            st.addEventListener("click", function(){

                // resetting all stars to empty
                star.forEach(i => {
                    i.querySelector(".full").style.display = "none";
                });

                // setting stars upto vl index to clicked
                for (let j = 0; j<= vl; j++){
                    star[j].querySelector(".full").style.display = "block"
                }
            })
        })
    })
})