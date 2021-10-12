'use strict'

const text=document.querySelector("#text");
const btn=document.querySelector("#btn2");
const output=document.querySelector("#output");

function errors(err){
    console.log("error occured :"+ error);
    alert("something went wrong !! Try again");
}

btn.addEventListener('click',function translate(){
    const input=text.value;
    const url=`https://api.funtranslations.com/translate/minion.json?text=${input}`;
    fetch(url).then(response=>response.json()).then(json=>{
        const translatedText=json.contents.translated;
        output.innerHTML=translatedText;
    }).catch(errors);
});

