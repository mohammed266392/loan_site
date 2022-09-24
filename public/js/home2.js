console.log("je suis dans la page");
let boolMarginValue = false;

const btn = document.querySelector('.menu-burger');
const btnNavBurger = document.querySelector('.menu-burger-nav');
const btnDropDownMenuBurger = document.querySelector('.menu-burger-nav_menu_li-dropdown-2');
const btnPlusIcon = document.querySelectorAll('.sous_icon_plus');


btn.addEventListener('click',()=>{

    btn.classList.toggle('active');
    btn.classList.toggle('menu-burger-z-index');
    btnNavBurger.classList.toggle('menu-burger-nav-active');
    const divConteneur = document.querySelector('.conteneur_menu-burger_content');
    // const divMenuB = document.querySelector('.menu-burger');
    // const divMain = document.querySelector('.main');


    divConteneur.classList.toggle('active');
    // divMain.classList.toggle('main-opacity');

});

btnDropDownMenuBurger.addEventListener('click',(event)=>{

    const btnBlockNav = document.querySelector('.menu-burger-nav');
    btnBlockNav.classList.toggle('dropdown-2');
    document.querySelector('.menu-burger-nav_menu_li-dropdown-2').classList.toggle('grossir');
    const listBtnMaigrir = document.querySelectorAll(".menu-burger-nav_menu_li:not(.menu-burger-nav_menu_li:nth-child(4))") ;
    listBtnMaigrir.forEach(elt =>{
        elt.classList.toggle('maigrir');
    })
    

    // console.log("mon btn block : ",btnBlock);
    // console.log("j'ai cliqué ici : ");
})


btnPlusIcon.forEach(elt  =>{

    elt.addEventListener('click',(event)=>{
        console.log('click1');
        console.log(event.composedPath()[0].nextElementSibling);
        const btnBlockTextTab = event.composedPath()[0].nextElementSibling;
        
        btnBlockTextTab.classList.toggle('sous_icon_texte_toggle');
        

        const btnSousIconTab = document.querySelectorAll('.sous_icon_texte');
        if(initMarginValue(btnSousIconTab)){
            document.querySelector('.main2_container_icon').style.marginBottom = "350px";
        }else{
            document.querySelector('.main2_container_icon').style.marginBottom = "250px";
        }
        
   
    });
});

const initMarginValue = (btnSousIconTab) =>{
    let marginV = false;
    for (const btn of btnSousIconTab) {

        if( btn.classList.contains('sous_icon_texte_toggle') ){
            console.log(" ma valeur de margin : ",true);
            return true;
        }
        marginV = marginV || btn.classList.contains('sous_icon_texte_toggle');
        
    }
    console.log(" ma valeur de margin : ",marginV);
    return marginV;
    
}


