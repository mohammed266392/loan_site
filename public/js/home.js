// console.log("je suis dans la page");


// const btn = document.querySelector('.btn')

// console.log("mon bouton",btn)

// btn.addEventListener('click',()=>{

//     btn.classList.toggle('active');
//     btn.classList.toggle('not-active');


// });
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})