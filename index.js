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
   rank[i].innerHTML=parseInt(rank[i].innerHTML)+parseInt(n);
  }
  return rank;
}

function deepestChild(){
  var current=document.querySelectorAll("div #grand-node")[0]
  var next = current.children[0]
  while (next){
    current=next;
    next=current.children[0]
  }
  return current;
}
