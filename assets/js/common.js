// navi
let buttonNav = document.getElementById("btn-nav");
buttonNav.onclick = function(){
    let nav = document.getElementById("nav");
    if(nav.classList.contains('active')){
        nav.classList.remove("active");
        buttonNav.classList.remove('active');
        document.body.classList.remove('active_nav');
    }else{
        nav.classList.add("active");
        buttonNav.classList.add('active');
        document.body.classList.add('active_nav');
    }
}