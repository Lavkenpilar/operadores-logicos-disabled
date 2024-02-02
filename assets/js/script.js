const button1=document.querySelector('#enviar')
console.log (enviar)
const button2 = document.querySelector ('#revisar')
console.log (revisar)
const opcion1 = document.querySelector ('#opt1').checked 
const opcion2 = document.querySelector ('#opt2').checked 

button2.addEventListener ("click", function (){
    if (opcion1===true || opcion2===true) { 
        button1.disabled = false
        } else {
            button1.disabled =true
        }
})