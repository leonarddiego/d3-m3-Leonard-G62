// Codigo original
    // function pintar(){
    //     ele.style.backgroundColor = 'yellow'
    //     }
    //     const ele = document.getElementById("ele1")
    //     ele.addEventListener("click", pintar);

//Codigo Modificado 2.2
    // const ele = document.getElementById("ele1")
    // ele.addEventListener("click", function pintar(){
    //     ele.style.backgroundColor = 'yellow'
    //     }
    // );

//Codigo Modificado 2.3
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", function pintar(color){
        ele.style.backgroundColor = color
        pintar("yellow");
        }
    );


