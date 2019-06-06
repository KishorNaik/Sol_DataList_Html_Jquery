/// <reference path="./jquery-3.4.1.js" />

let languageList=[
    "Csharp",
    "Typescript",
    "Javascript",
    "Swift",
    "Java",
];

console.log(languageList);

$(document).ready(function(){

    onLoadLanguage();

    onGetEachValue();
   
});

function onLoadLanguage(){

    for(let value of languageList){

        $("#languageList")
        .append($("<option>")
        .attr("value",value)
        );
        
    }

}

function onGetValue(){

    let getSelectedLanguageValue=$("#txtLanguage").val();
    console.log(getSelectedLanguageValue);

}

function onGetEachValue(){

    $("#txtLanguage").on('input',function(){

        let inputValue=$(this).val();
        //console.log(inputValue);

        $("#languageList option")
        .filter(function(){
            if($(this).val().toUpperCase()===inputValue.toUpperCase()){
                alert("Ajax Fire");
            }
        });

    });

}
