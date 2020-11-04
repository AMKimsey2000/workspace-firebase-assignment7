/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$("li.hot").removeClass("hot").addClass("cool");

// traverse the elements


// add a new element


$("#add").click(addElement);
function addElement() {
  var newEle = $("#todo").append("<li><input type = 'text'></li>");
  $("input").blur(function() {
    $(this).parent().addClass("cool");
    $(this).parent().text($(this).val());
    $(this).remove();
  });
}

$("li").click(changeStyle);
function changeStyle() {
  $(this).toggleClass("complete", "cool");
}

$("#remove").click(removeElement);
function removeElement() {
  $(".complete").remove();
}
