
//  const tagSearch = document.querySelectorAll('article.first');
//  console.log(tagSearch);

//  for(var i = 0; i < tagSearch.length; i++){
//      const h1Search = tagSearch[i].querySelectorAll('h1');
//      console.log(h1Search.length);
//  }

//zadanie 1
getDataAnimation(document.querySelectorAll(".title"));
function getDataAnimation(element) {
    var x = element;
    return x;
}

//zadanie 2
var home =document.querySelectorAll("#home");
console.log(home);
var li =document.querySelector("li[data-direction]");
console.log(li);
var block = document.querySelector(".block");
console.log(block);

//zadanie 3
var nav =document.querySelectorAll("nav li");
console.log(nav);
var paragraf =document.querySelectorAll("div p");
console.log(paragraf);
var div =document.querySelectorAll("article div");
console.log(div);

//zadanie 4 - brak h1 w tagach
var first =document.querySelectorAll("article.first");
console.log(first);
var h1 =document.querySelectorAll("article.first h1");
console.log(h1);

//zadanie 5    zedytowałem kod html, ponieważ z jakiegoś powodu nie zawierał id mainfooter
console.log (getId(document.querySelector("#mainFooter")));
function getId(element) {
    return(element.id);
}
