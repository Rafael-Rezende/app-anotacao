
(function(controladorDeCartao, $) {

  var usuario = "seu.email@exemplo.com.br";

  $.getJSON("https://ceep.herokuapp.com/cartoes/carregar?callback=?",
  {usuario: usuario},
    function(res) {
      var cartoes = res.cartoes;
      console.log(cartoes.length + " carregados em " + res.usuario);
      cartoes.forEach(function(cartao){
        controladorDeCartao.adicionaCartao(cartao.conteudo);
      });
    }
  );

$(".mural").on("precisaSincronizar", function(){
  var cartoes = [];

  $(".cartao").each(function(){
    var cartao = {};

    cartao.conteudo = $(this).find(".cartao-conteudo").html();
    cartoes.push(cartao);
  });

  var mural = {
    usuario: usuario,
    cartoes: cartoes
  }

    $.ajax({
      url:"https://ceep.herokuapp.com/cartoes/salvar",
      method: "POST",
      data: mural,
      success: function(result){
        $("#sync").addClass("botaoSync--sincronizado");
        console.log(result.quantidade + " cartoes salvos em "+ result.usuario);

        var quantidadeRemovidos = controladorDeCartao.idUltimoCartao() - result.quantidade
          console.log(quantidadeRemovidos + "cartao removidos")
      },
      error: function(){
        $("#sync").addClass("botaoSync--deuRuim");
        console.log("Não foi possível salvar o mural");
      },
      complete: function(){
        $("#sync").removeClass("botaoSync--esperando");
      }
    });
  });

  $('.mural').on("precisaSincronizar", function(){

    $("#sync").removeClass("botaoSync--sincronizado");
    $("#sync").addClass("botaoSync--esperando");

  });

})(controladorDeCartao, $)

$("#sync").on("click", function(e) {
  $(".mural").trigger("precisaSincronizar");
});

$(".novoCartao").on("submit", function(e) {
  $(".mural").trigger("precisaSincronizar");
});

$("").on("submit", function(e) {
  $(".mural").trigger("precisaSincronizar");
});
