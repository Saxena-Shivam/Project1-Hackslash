//
// function darkmode() {
//     let body = document.querySelector("body");
//     let btn = document.querySelector("button");
//     let head2 = document.getElementsByTagName("h2");
//     let head3 = document.getElementsByTagName("h3");
//     let head4 = document.getElementsByTagName("h4");
//     let par = document.getElementsByTagName("p");
//   body.style.backgroundColor = "#000";
//   btn.style.display = "none";
//   for (let i = 0; i < head2.length; i++) {
//     head2[i].style.color = "#fff";
//   }
//   for (let i = 0; i < head3.length; i++) {
//     head3[i].style.color = "#fff";
//   }
//   for (let i = 0; i < head4.length; i++) {
//     head4[i].style.color = "#fff";
//   }
//   for (let i = 0; i < par.length; i++) {
//     par[i].style.color = "#fff";
//    }
//  }
let body=document.querySelector("body");
let btn=document.querySelector("button");
let heading=document.querySelectorAll("h2");
let heading1=document.querySelectorAll("h3");
let heading2=document.querySelectorAll("h4");
let para=document.querySelectorAll("p");
let mode=0;
btn.addEventListener("click",()=>{
    if(mode==0){
        body.style.backgroundColor="#000";
        heading.forEach(h2=>{
            h2.style.color="#f0f8ff";
            h2.style.backgroundColor="#000";
        });
        heading1.forEach(h3=>{
            h3.style.color="#f0f8ff";
        });
        heading2.forEach(h4=>{
            h4.style.color="#f0f8ff";
        });
        para.forEach(p=>{
            p.style.color="#f0f8ff";
        })
        mode=1;
    }
    else{
        body.style.backgroundColor="#f0f8ff";
        heading.forEach(h2=>{
            h2.style.color="";
            h2.style.backgroundColor="#f0f8ff";
        });
        heading1.forEach(h3=>{
            h3.style.color="";

        });
        heading2.forEach(h4=>{
            h4.style.color="";
        });
        para.forEach(p=>{
            p.style.color="";
        })
        mode=0;
    }
    
})
