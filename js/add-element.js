var currTheme = "cool"
$("li.hot").removeClass("hot").addClass(currTheme);

$("#add").click(function() {
  var newEle = $("#todo").append("<li><input type = 'text'></li>");
  $("input").blur(function() {
    $(this).parent().addClass(currTheme);
    $(this).parent().text($(this).val());
    $(this).remove();
  });
});

$("#todo").on("click", "li", function() {
  if (!($(this).html().substr(0, 6) == "<input")) {
    $(this).toggleClass("complete", currTheme);
  }
});

$("#remove").click(function() {
  $(".complete").remove();
});

$("#hiddenTheme").contextmenu(function() { //contextmenu just means right click
  var newTheme = (currTheme == "cool" ? "hot" : "cool");
  $("#todo li").each(function() {
    $(this).removeClass(currTheme).addClass(newTheme);
  })
  currTheme = newTheme;
});