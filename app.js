//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása változókba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");


//Ciklussal vegiglepkedek az eltarolt gombokon, amelyiken rajta van a btn class
btns.forEach((btn)=>{

    //az osszes gomb kozul amelyiket bejarok ciklussal, azt kattintottam meg amelyik az aktualis ciklusfutaskor jon a sorba (elso ciklusfutas -> 0. indexu gomb (dicrease) stb...)
    btn.addEventListener("click", (e)=>{

        //az eppen aktualisan megkattintott gombon milyen class/classok vannak
        const style = e.currentTarget.classList;

        //ha az aktualisan megkattintott gombok classsai kozul tartalmazza a "decrease" classt
        if(style.contains("decrease")){

            //csokkentjuk az alaperteket
            count--;
        }
        else if(style.contains("increase")){

            //noveljuk az alaperteket
            count++;
        }
        else{

            //visszaallitjuk az alaperteket 0-ra
            count = 0;
        }


        //szinek hozzaadasa spanhez
        if(count > 0){

            value.style.color = "green";
        
        }
        else if(count < 0){

            value.style.color = "red";
            
        }
        else{

            value.style.color = "black";
        }



        value.textContent = count;
    })

})






























/*
//Egyszerű, lusta módszer
increase.addEventListener("click", ()=>{

    //novelem az alapertekem 1-el
    count++;

    //megnezem, hogy az alapertekem nagyobb-e mint 0
    if(count > 0){

        //ha nagyobb, hozzaadok egy zold betuszint
        value.style.color = "green";
    }

    //majd az alapertekem aktualis erteket beallitom a value id-val ellatott spannek
    value.textContent = count;

})

//Egyszerű, lusta módszer
decrease.addEventListener("click", ()=>{

    //csokkentem az alapertekem 1-el
    count--;

    //megnezem, hogy az alapertekem kisebb-e mint 0
    if(count < 0){

        //ha nagyobb, hozzaadok egy piros betuszint
        value.style.color = "red";
    }

    //majd az alapertekem aktualis erteket beallitom a value id-val ellatott spannek
    value.textContent = count;

})

//Egyszerű, lusta módszer
reset.addEventListener("click", ()=>{

    //az alapertekemet visszallittom 0-ra
    count = 0;

    //visszaallitom a betuszint
    value.style.color = "black";

    //majd az alapertekem aktualis erteket beallitom a value id-val ellatott spannek
    value.textContent = count;
})
*/

