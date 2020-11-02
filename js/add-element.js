/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
/* JavaScript Method
var list = document.querySelectorAll("li.hot");
for (var i = 0; i < list.length; i++) {
  list[i].setAttribute("class", "cool")
}
*/

$("li.hot").toggleClass("hot cool"); //JQuery method

// traverse the elements


// add a new element


// add by clicking the plus sign
document.getElementById("add").addEventListener("click", addElement);

function addElement() {
  // add a new element
  
}


//  click the li element will change the changeStyle
function changeStyle() {

}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element
 
 
}
