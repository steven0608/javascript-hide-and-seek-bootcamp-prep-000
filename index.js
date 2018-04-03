function getFirstSelector(selector){
  var firstElement = document.querySelectorAll(selector)[0];
  return firstElement;
}

function nestedTarget(){
  var element = document.getElementById("nested").querySelectorAll(".target")[0];
  return element;
}
function increaseRankBy(n){
  var rank=parseInt(document.querySelectorAll(".ranked-list").innerHTML)
  
  return (rank+parseInt(n));
}
