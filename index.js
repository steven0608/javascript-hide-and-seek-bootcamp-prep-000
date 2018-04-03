function getFirstSelector(selector){
  var firstElement = document.querySelectorAll(selector)[0];
  return firstElement;
}

function nestedTarget(){
  var element = document.getElementById("nested").querySelectorAll(".target")[0];
  return element;
}
function increaseRankBy(n){
  var rank=document.querySelectorAll(".ranked-list")
  for (let i=0;i<rank.length;i++){
    var rank[i]=parseInt(rank[i].innerHTML)+parseInt(n);
  }
  return rank;
}
