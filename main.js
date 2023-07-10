let msg = document.getElementById("massege");
let btn = document.getElementById("send");
let ul = document.getElementById("masseges");

btn.addEventListener("click",function(){
     let list = document.createElement("li");
     list.innerHTML = msg.value;
     ul.appendChild(list);
     msg.value = "";
})
console.log;