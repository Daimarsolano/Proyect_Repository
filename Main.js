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
