let button=document.querySelector(".get-button");
let text=document.querySelector("input");
let reposdiv=document.querySelector(".show-data");



button.onclick=function(){
    if(text.value==" "){
        reposdiv.innerHTML="enter your user";
    }else {
        getrepo(text.value)
    }
}
function getrepo(val){
    reposdiv.innerHTML=" ";
    fetch("https://api.github.com/users/val/repos").then(function(result){
        return result.json()
    }).then(function(repos){
        console.log(repos);
        for(let i=0;i<repos.length;i++){
            let div=document.createElement("div");
            let nametxt=document.createTextNode(repos[i].name);
            div.appendChild(nametxt);
            let url=document.createElement("a");
            let utxt=document.createTextNode("visit")
            url.appendChild(utxt);
            url.setAttribute("target","_blank");
            url.href=`"https://api.github.com/users/${val}/${repos[i].name}"`;
            div.className="repo-box"
            reposdiv.appendChild(div);
            reposdiv.appendChild(url);
        }
    })
}