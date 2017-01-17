var controladorDeCartao = (function() {

	function decideTipoCartao(conteudo){
	  var quebras = conteudo.split("<br>").length;
	  var totalDeLetras = conteudo.replace(/<br>/g, " ").length;

	  var ultimoMaior = "";
	  conteudo.replace(/<br>/g, " ")
	          .split(" ")
	          .forEach(function(palavra){
	            if(palavra.length > ultimoMaior.length) {
	              ultimoMaior = palavra;
	            }
	          });

	  var tamMaior = ultimoMaior.length;
	  var tipoCartao = "cartao--textoPequeno";

	  if(tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
	    tipoCartao = "cartao--textoGrande";
	  } else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
	    tipoCartao = "cartao--textoMedio";
	  }
	  return tipoCartao;
	}

	contador = 0;

	function adicionaCartao(conteudo, cor){
		contador++;

		var	opcoes	=	criaOpcoesDoCartao(contador);

		var	tipoCartao	=	decideTipoCartao(conteudo);

		var	conteudoTag	=	$("<p>").addClass("cartao-conteudo")
															.append(conteudo);

		$("<div>").attr("id","cartao"	+	contador)
												.attr("tabindex", contador)
												.addClass("cartao")
												.addClass(tipoCartao)
												.append(opcoes)
												.append(conteudoTag)
												.css("background-color",cor)
												.prependTo(".mural");
	}

	return {
		adicionaCartao: adicionaCartao,
		idUltimoCartao: function() {
			return contador;
		}
	}
})($, criaOpcoesDoCartao);
