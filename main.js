const listaDeTeclas = document.querySelectorAll('.tecla')

function tocaSom(idElementoAudio){
   const elemento = document.querySelector(idElementoAudio);
   
   if(elemento && elemento.localName === 'audio'){
        elemento.play();
   }
   else{
        alert('Elemento nao encontrado');
   }
}

for(let contador  = 0; contador < listaDeTeclas.length; contador++){
    //recebe o index da tecla
    const tecla = listaDeTeclas[contador];
    //pega o nome da classe no indice 1 e armazena 
    const instrumento = tecla.classList[1];

    //pega o nome do instrumento e monta um id com string e armazena
    const idAudio = `#som_${instrumento}`;
    //quando clicar na tecla que representa o index(contador) chama a função tocaSom
    // tecla.onclick = function(){
    //     tocaSom(idAudio);
    // }

    tecla.addEventListener('click', function(){
        tocaSom(idAudio);
    })
    tecla.onkeydown = function(evento){
        if(evento.code === 'space' ||  evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }        
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
