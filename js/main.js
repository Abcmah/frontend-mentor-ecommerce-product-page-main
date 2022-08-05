function toggleMenu(res,p){
    if(p){

        let mobmenu = document.querySelector(".overly");
        res ==="open" ? mobmenu.style.display="flex":mobmenu.style.display="none"
    }
}

// cart
function toggleCart(req) {

    let cartpop=document.querySelector(".cart-popup");
    req === "open" ? cartpop.style.display="block":cartpop.style.display="none";


}
