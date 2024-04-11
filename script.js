// document.body.innerHTML='hello';
// document.title = 'Good job';
// document.title='Change';
// document.body.innerHTML = '<button>Good  job</button>';
// console.log(document.body.innerHTML);
// console.log(document.querySelector('button').innerHTML);
// document.querySelector('button').innerHTML='Changed';
// document.querySelector('.js-button').innerHTML = 'Good Morning';
// const buttonElement=document.querySelector('.js-button');
// console.log(buttonElement);

function subscribe(){
    const buttonElement=document.querySelector('.js-subscribe-button');
    
    if(buttonElement.innerText === 'Subscribe'){
        buttonElement.innerHTML='Subscribed';
    }   else{
        buttonElement.innerHTML='Subscribe';
    }
}