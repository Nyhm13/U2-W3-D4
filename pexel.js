const myApiKey = "wKIS4VRxtZsAM5rtZwihJ5gdiyioP3Nj8h61gDhoBcE1UgLMWZMV9YfE";

const apiUrl = "https://api.pexels.com/v1/search?query=";

const updateImgMountain = document.getElementById("mountains");
const updateImgKittens = document.getElementById("kittens");
const allImg = document.querySelectorAll("img");
const allSmall= document.querySelectorAll("small");
const allHideBtns=document.querySelectorAll(".hide")
console.log(allHideBtns)

const getDatas = function (query) {
  fetch(apiUrl+query,{
    headers: {
      Authorization: myApiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("la mia risposta", response);
        return response.json();
      } else {
        throw new Error("la risposta non e valida");
      }
    })
    .then((data) => {
      console.log("dati ricevuti dal server", data);
      updateImgMountain.addEventListener("click", function () {
        
        allImg.forEach((img,index) => {
            if (index<data.photos.length){
                img.src = data.photos[index].src.medium
            }
         allSmall.forEach((small,index)=>{
            if(index<data.photos.length){
                small.innerText=data.photos[index].id
            }
         });
        });
      });
        updateImgKittens.addEventListener("click", function () {
            
            allImg.forEach((img,index) => {
                if (index<data.photos.length){
                    img.src = data.photos[index].src.medium
                }
             allSmall.forEach((small,index)=>{
                if(index<data.photos.length){
                    small.innerText=data.photos[index].id
                }
             });
            });
        });
    })
    .catch((error) => {
      console.log("abbiamo un problema", error);
    });
};
 
getDatas("mountains");

updateImgMountain.addEventListener("click", function () {
    getDatas("mountains");})
    
updateImgKittens.addEventListener("click", function () {
    getDatas("kittens");})
