window.addEventListener("scroll", function(){

    const nav = document.querySelector(".navbar");

    if(window.scrollY > 50){
        nav.style.background = "#003b71";
    }else{
        nav.style.background = "rgba(0,0,0,0.3)";
    }

});