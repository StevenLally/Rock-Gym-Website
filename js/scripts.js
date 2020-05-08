$(function () {
  //have map display Greenville, SC location when address is clicked
  $("#addressGvl").click(function () {
    if ($("#mapGvl").hasClass("d-none")) {
      $("#mapGvl").removeClass("d-none");
      $("#mapCola").addClass("d-none");
    }

    if ($("#mapIconCola").hasClass("fa-inverse")) {
      $("#mapIconCola").removeClass("fa-inverse");
      $("#mapIconGvl").addClass("fa-inverse");
      $("#circleIconCola").css("color", "#EDF0F4");
      $("#circleIconGvl").css("color", "#3B4754");
    }
  });

  //have map display Columbia, SC location when address is clicked
  $("#addressCola").click(function () {
    if ($("#mapCola").hasClass("d-none")) {
      $("#mapCola").removeClass("d-none");
      $("#mapGvl").addClass("d-none");
    }

    if ($("#mapIconGvl").hasClass("fa-inverse")) {
      $("#mapIconGvl").removeClass("fa-inverse");
      $("#mapIconCola").addClass("fa-inverse");
      $("#circleIconGvl").css("color", "#EDF0F4");
      $("#circleIconCola").css("color", "#3B4754");
    }
  });







})