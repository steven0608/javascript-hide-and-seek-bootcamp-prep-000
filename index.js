function getFirstSelector(selector){
  var firstElement = document.querySelectorAll(selector)[0];
  return firstElement;
}

function nestedTarget(){
  var element = document.getElementById("nested").querySelectorAll(".target")[0];
  return element;
}
function increaseRankBy(n){
  var rank=parseInt(document.querySelectorAll(".ranked-list"))
  for (let i=0;i<rank.length;i++){
    var newRank=rank[i].innerHTML+n;
  }
  return newRank;
}
