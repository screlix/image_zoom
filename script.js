$(document).ready(function () {
  $("#a").on("mousemove", function (event) {
    $("h1").text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    $("#b").css({
      display: "inline",
      "transform-origin": event.pageX + "px" + " " + event.pageY + "px",
      transform: "scale(4)",
    });
  });
  $("#a").on("mouseout", function () {
    $("#b").css({ display: "none" });
  });
});
