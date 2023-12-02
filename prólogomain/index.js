$(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var opacity = scroll / 2; /* Ajuste o divisor para controlar a intensidade do efeito */
  
      // Garante que a opacidade permaneça entre 0 e 1
      opacity = Math.min(1, Math.max(0, opacity));
  
      // Aplica a opacidade à máscara de fundo
      $("#mascara").css("opacity", opacity);
    });
  });