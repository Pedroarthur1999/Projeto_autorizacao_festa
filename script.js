
function verificarAutorizacao(){
     nome = document.getElementById('nome').value
     listaDeConvidados= ['ana', 'julio', 'thiago',' anderson', 'evelyn']
     res = document.getElementById('resultado')

     if(listaDeConvidados.includes(nome)){
        res.innerText = 'voce está convidado'
        res.style.color = 'green'
        
     }
     else{
        res.innerText = ' voce nao esta autorizado'
     }

    
}