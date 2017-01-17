$(".novoCartao").submit(function(e){

    e.preventDefault();

  var $campoConteudo = $('.novoCartao-conteudo');
  var conteudo = $campoConteudo.val().trim().replace(/\n/g, "<br>")
                                            .replace(/\s\*{2}/g, " <b>")
                                            .replace(/^\*{2}/g, " <b>")
                                            .replace(/\*{2}$/g, " </b>")
                                            .replace(/\*{2}\s/g, " </b>");

  if(conteudo) {
    controladorDeCartao.adicionaCartao(conteudo);
  }

  $campoConteudo.val("");


});
