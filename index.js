function getFirstSelector(selector){
  var firstElement = document.querySelectorAll(selector)[0];
  return firstElement;
}

function nestedTarget(){
  var element = document.getElementById("nested").querySelectorAll(".target")[0];
  return element;
}
