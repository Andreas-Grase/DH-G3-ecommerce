function mudarSlidePromo(slide) {
    var slideOfertas = document.querySelector(".slide-ofertas");
    var slideMV = document.querySelector(".slide-mais-vendidos");

    if(slide==1){
        slideOfertas.style.display="flex";
        slideMV.style.display="none";
    } 
    if(slide==2){
        slideMV.style.display="flex";
        slideOfertas.style.display="none";
    }
}