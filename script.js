
let developer = document.querySelector('#Home .content header h2')
let texto = 'Front End Developer'
let contador = 0
let FrontEnd = ' '
let listLinks = document.querySelector('.list-links')

 const MostrarLetra = setInterval( function(){

        FrontEnd += texto.charAt(contador++)
        developer.innerHTML = FrontEnd

       if(contador === texto.length){
        clearInterval(MostrarLetra)
       }

}, 150)



function showList(){
       listLinks.classList.toggle('show-list')
}



