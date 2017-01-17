$("#ajuda").click(function(){
	$.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",
		function(result){
      console.log(result);

			result.instrucoes.forEach(function(instrucao){
        controladorDeCartao.adicionaCartao(instrucao.conteudo, instrucao.cor);
      });
		}
	);
});
