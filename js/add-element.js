$("li.hot").removeClass("hot").addClass("cool");

$("#add").click(function() {
  var newEle = $("#todo").append("<li><input type = 'text'></li>");
  $("input").blur(function() {
    $(this).parent().addClass("cool");
    $(this).parent().text($(this).val());
    $(this).remove();
  });
});

$("#todo").on("click", "li", function() {
  if (!($(this).html().substr(0, 6) == "<input")) {
    $(this).toggleClass("complete", "cool");
  }
});

$("#remove").click(function() {
  $(".complete").remove();
});
