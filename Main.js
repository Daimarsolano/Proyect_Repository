/*1 variable: Crear un evento con el cambio de las imagenes "Hamburguesa" y  "X" Es decir,*/ 
const Icono = document.querySelector('.nav__hamburger');

/*2 variable:  */
const cerrar = document.querySelector('.nav__overlay');

/*Esta variable es funcion de los elementos en desktop */
const desaparecer = cerrar; //para esconder los menu. 

/*Guardar.
Cada vez que le de click cambia el icono*/
Icono.addEventListener('click', ()=>{
    Icono.classList.toggle('nav__hamburguer--open');
    /*Desde la Inspeccion estamos quitando y agg icono diferentes */
    cerrar.classList.toggle('nav__overlay--show');
    /*Lo que hará que se desaparezca y aparezca al darle click por el  evento "ICONO"*/
}); 



//aplicamos las funcionalidades del menu para que muestre cada elemento que contiene 

cerrar.addEventListener('click', (e)=>{ 
    e.preventDefault();

    const currentElement = e.target; 

    if(isActive(currentElement, 'nav__parent')){

        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu)
        if( window.innerWidth < 768){
            let height = (subMenu.clientHeight == 0)  
                       ? subMenu.scrollHeight : 0;

            subMenu.style.height = height + 'px';
        }else{

            if( !isActive(subMenu, 'nav__inner--show')){
                closeDropdown(desaparecer);
            }
            subMenu.classList.toggle('nav__inner--show');
            desaparecer = subMenu;

        }
    }
});



function isActive(element, string){
    return element.classList.value.includes(string); 
}
function closeDropdown(desaparecer){
    if (isActive(desaparecer, 'nav__inner--show')){
        desaparecer.classList.remove('nav__inner--show');
    }
}

/*Esta funcion pasa cuando la pantalla incrementa, y esconde los submenu, de cada elemento*/
window.addEventListener('resize', ()=>{
    closeDropdown(desaparecer);

    if(window.innerWidth > 768){
        const navInners = document.querySelectorAll('.nav__inner');

        navInners.forEach(navInner =>{
            navInner.style.height = '';
        });
       
    }
})

