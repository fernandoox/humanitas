$(function() {
  var selectedClass = "";

  $("p.titleActiveUno").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#portfolioAnimatedUno").fadeTo(100, 0.1);
    $("#portfolioAnimatedUno div").not("." + selectedClass).fadeOut();
    setTimeout(function() {
      $("." + selectedClass).fadeIn();
      $("#portfolioAnimatedUno").fadeTo(500, 1);
    }, 500);
  });

  $("p.titleActiveDos").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#portfolioAnimatedDos").fadeTo(100, 0.1);
    $("#portfolioAnimatedDos div").not("." + selectedClass).fadeOut();
    setTimeout(function() {
      $("." + selectedClass).fadeIn();
      $("#portfolioAnimatedDos").fadeTo(500, 1);
    }, 500);
  });

  $("p.titleActiveTres").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#portfolioAnimatedTres").fadeTo(100, 0.1);
    $("#portfolioAnimatedTres div").not("." + selectedClass).fadeOut();
    setTimeout(function() {
      $("." + selectedClass).fadeIn();
      $("#portfolioAnimatedTres").fadeTo(500, 1);
    }, 500);
  });
});
