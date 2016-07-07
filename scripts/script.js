$(document).ready(function() {
  var transitionsArray = ['zoom', 'slide', 'scale', 'horizontal flip', 'vertical flip', 'fade up', 'fade down', 'pulse', 'jiggle', 'bounce'];

  function getLetters() {
    return $('.header-letter');
  }

  setInterval(function() {
    $(getLetters()[Math.floor((Math.random() * 10) + 1) - 1]).transition(transitionsArray[Math.floor((Math.random() * 10) + 1) - 1]);
  }, 2000);

});
