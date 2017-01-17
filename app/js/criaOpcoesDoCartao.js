var criaOpcoesDoCartao = (function() {
  "use strict";

  var removeCartao = function(conteudo){
    var $paiCartao = document.querySelector("#cartao"+this.getAttribute("data-ref"));

    $paiCartao.classList.add("cartao--some");

    $paiCartao.addEventListener("transitionend", function(){
      $paiCartao.remove();
    });
  }

  var ehPraEditar = false;

  function toggleEdicao() {

    var cartao = document.querySelector("#cartao"+this.getAttribute("data-ref"));
    var conteudo = $(cartao).find(".cartao-conteudo");

    if(ehPraEditar) {
      ehPraEditar = false;
      conteudo.attr("contenteditable", false);
      conteudo.blur();
    } else {
      ehPraEditar = true;
      conteudo.attr("contenteditable", true);
      conteudo.focus();
    }
  }

  return function(idNovoCartao) {

    var	botaoRemove	=	$("<button>").addClass("cartao-menu-excluir")
                                  .addClass("opcoesDoCartao-opcao")
                                  .attr("data-ref",	contador)
                                  .click(removeCartao);

    var	botaoEditar	=	$("<button>").addClass("cartao-menu-editar")
                                  .addClass("opcoesDoCartao-opcao")
                                  .attr("data-ref",	contador)
                                  .click(toggleEdicao);

    var opcoes=	$("<nav>").addClass("cartao-menu")
    											.append(botaoRemove)
                          .append(botaoEditar);

    return opcoes;

  }
});
